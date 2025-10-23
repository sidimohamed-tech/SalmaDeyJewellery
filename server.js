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
});

// Middleware pour vérifier l'origine
app.use((req, res, next) => {
  const referer = req.headers.referer || '';
  if (!referer.includes("localhost") && !referer.includes("votre-domaine.com") && referer !== '') {
    return res.status(403).send("Accès interdit");
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

app.get("/images/:category/:fileName", async (req, res) => {
  const { category, fileName } = req.params;
  const file = storage.bucket(bucketName).file(`produits/${category}/${fileName}`);

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

app.listen(PORT, () => {
  console.log(`Serveur en cours d'exécution sur http://localhost:${PORT}`);
});