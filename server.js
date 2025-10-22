import express from "express";
import { Storage } from "@google-cloud/storage";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Initialiser Google Cloud Storage
const storage = new Storage({
  keyFilename: path.join(__dirname, "mes-photos-475322-a0fce2bd79ef.json"), // Chemin mis à jour vers votre clé JSON
});
const bucketName = "ghrini-images-prod";

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