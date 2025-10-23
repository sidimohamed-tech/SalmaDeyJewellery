import express from "express";
import { Storage } from "@google-cloud/storage";
import path from "path";
import { fileURLToPath } from "url";
import { SecretManagerServiceClient } from "@google-cloud/secret-manager";

const app = express();
const PORT = 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const bucketName = "ghrini-images-prod"; // Nom du bucket Google Cloud Storage

// Fonction pour récupérer la clé depuis Google Secret Manager
async function getKeyFromSecretManager() {
  const client = new SecretManagerServiceClient();
  const [version] = await client.accessSecretVersion({
    name: "projects/mes-photos-475322/secrets/mes-photos-key/versions/latest",
  });
  return JSON.parse(version.payload.data.toString());
}

// Initialiser Google Cloud Storage avec la clé récupérée
let storage;
getKeyFromSecretManager().then((key) => {
  storage = new Storage({ credentials: key });

  // Démarrer le serveur après l'initialisation de storage
  app.listen(PORT, () => {
    console.log(`Serveur en cours d'exécution sur http://localhost:${PORT}`);
  });
}).catch((error) => {
  console.error("Erreur lors de l'initialisation de Google Cloud Storage:", error);
});

// Middleware pour vérifier l'origine
app.use((req, res, next) => {
  const referer = req.headers.referer || '';
  if (!referer.includes("localhost") && !referer.includes("192.168.1.129") && referer !== '') {
    return res.status(403).send("Accès interdit");
  }
  next();
});

// Middleware pour ajuster les URLs des images selon le réseau
app.use((req, res, next) => {
  const host = req.headers.host;
  const baseUrl = host.includes("localhost") ? "http://localhost:3000" : `http://${host}`;

  req.baseUrl = baseUrl; // Ajoute baseUrl à l'objet req pour utilisation dans les routes
  next();
});

// Middleware pour vérifier si storage est défini
app.use((req, res, next) => {
  if (!storage) {
    return res.status(500).send("Le service de stockage n'est pas encore prêt. Veuillez réessayer plus tard.");
  }
  next();
});

// Route pour servir les images
app.get("/images/:fileName", async (req, res) => {
  const fileName = req.params.fileName;
  const file = storage.bucket(bucketName).file(`produits/boucles d'oreille et bagues/${fileName}`);

  try {
    const [url] = await file.getSignedUrl({
      action: "read",
      expires: Date.now() + 15 * 60 * 1000, // URL valide pendant 15 minutes
    });
    res.redirect(url);
  } catch (error) {
    res.status(404).send("Fichier introuvable");
  }
});

// Route pour servir les images avec baseUrl dynamique
app.get("/images/:category/:fileName", async (req, res) => {
  const { category, fileName } = req.params;
  const file = storage.bucket(bucketName).file(`produits/${category}/${fileName}`);

  try {
    const [url] = await file.getSignedUrl({
      action: "read",
      expires: Date.now() + 15 * 60 * 1000, // URL valide pendant 15 minutes
    });
    res.redirect(url.replace("http://localhost:3000", req.baseUrl)); // Remplace localhost par l'URL réseau
  } catch (error) {
    res.status(404).send("Fichier introuvable");
  }
});

app.listen(PORT, () => {
  console.log(`Serveur en cours d'exécution sur http://localhost:${PORT}`);
});