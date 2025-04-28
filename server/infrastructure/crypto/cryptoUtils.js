const crypto = require("crypto");

const SECRET_KEY = crypto.createHash("sha256").update("messi").digest();
const HMAC_KEY = crypto.createHash("sha256").update("supersecreto").digest();
const ALGORITHM = "aes-256-cbc";
const IV_LENGTH = 16;

function encrypt(text) {
  const iv = crypto.randomBytes(IV_LENGTH);
  const cipher = crypto.createCipheriv(ALGORITHM, SECRET_KEY, iv);
  const encrypted = Buffer.concat([
    cipher.update(text, "utf8"),
    cipher.final(),
  ]);

  const payload = iv.toString("hex") + ":" + encrypted.toString("hex");

  const hmac = crypto
    .createHmac("sha256", SECRET_KEY)
    .update(payload)
    .digest("hex");

  return payload + ":" + hmac;
}

function decrypt(encryptedPayload) {
  const parts = encryptedPayload.split(":");
  if (parts.length !== 3) throw new Error("Formato inválido");

  const [ivHex, encryptedHex, hmac] = parts;
  const payload = ivHex + ":" + encryptedHex;

  const recalculatedHmac = crypto
    .createHmac("sha256", SECRET_KEY)
    .update(payload)
    .digest("hex");
  if (hmac !== recalculatedHmac)
    throw new Error("Datos modificados o corruptos");

  const iv = Buffer.from(ivHex, "hex");
  const encrypted = Buffer.from(encryptedHex, "hex");

  const decipher = crypto.createDecipheriv(ALGORITHM, SECRET_KEY, iv);
  const decrypted = Buffer.concat([
    decipher.update(encrypted),
    decipher.final(),
  ]);

  return decrypted.toString("utf8");
}

function validate(text, encryptedPayload) {
  try {
    const decrypted = decrypt(encryptedPayload);
    return decrypted === text;
  } catch {
    return false;
  }
}

module.exports = {
  encrypt,
  decrypt,
  validate,
};
