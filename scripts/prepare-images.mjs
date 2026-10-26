// Converts the company's original WhatsApp photos (kept untouched in the
// parent folder) into web-ready JPEGs under src/assets/photos.
// Run once with: node scripts/prepare-images.mjs
import path from "node:path";
import sharp from "sharp";

const SOURCE = path.resolve(import.meta.dirname, "../..");
const OUT = path.resolve(import.meta.dirname, "../src/assets/photos");
const MAX_WIDTH = 1600;

const photos = {
  "14.31.31": "loja-showroom",
  "14.31.30 (2)": "loja-prateleiras",
  "14.31.25": "kit-suzuki",
  "14.31.25 (1)": "kit-ford-ranger",
  "14.31.26": "kit-toyota-farois-redondos",
  "14.31.26 (1)": "kit-toyota-land-cruiser",
  "14.31.26 (2)": "kit-toyota-hilux",
  "14.31.27": "kit-toyota-prado",
  "14.31.27 (1)": "kit-toyota-land-cruiser-auto-pro",
  "14.31.27 (2)": "kit-range-rover",
  "14.31.28": "kit-toyota-land-cruiser-300",
  "14.31.28 (1)": "jantes-mercedes",
  "14.31.29": "kit-mercedes-classe-g",
  "14.31.29 (1)": "kit-toyota-tundra",
  "14.31.29 (2)": "kit-lexus",
  "14.31.30": "kit-nissan-patrol",
  "14.31.30 (1)": "jantes-toyota",
};

// WhatsApp screenshots carry near-black bars at the top/bottom edges.
async function contentBounds(file) {
  const { data, info } = await sharp(file)
    .greyscale()
    .raw()
    .toBuffer({ resolveWithObject: true });
  const rowIsBar = (y) => {
    let sum = 0;
    for (let x = 0; x < info.width; x++) sum += data[y * info.width + x];
    return sum / info.width < 24;
  };
  let top = 0;
  let bottom = info.height - 1;
  while (top < info.height / 4 && rowIsBar(top)) top++;
  while (bottom > (info.height * 3) / 4 && rowIsBar(bottom)) bottom--;
  return { left: 0, top, width: info.width, height: bottom - top + 1 };
}

for (const [stamp, name] of Object.entries(photos)) {
  const file = path.join(SOURCE, `WhatsApp Image 2026-10-13 at ${stamp}.jpeg`);
  const bounds = await contentBounds(file);
  const info = await sharp(file)
    .extract(bounds)
    .resize({ width: MAX_WIDTH, withoutEnlargement: true })
    .jpeg({ quality: 82, mozjpeg: true })
    .toFile(path.join(OUT, `${name}.jpg`));
  console.log(name, `${info.width}x${info.height}`, `${Math.round(info.size / 1024)}KB`, `trim top=${bounds.top}`);
}
