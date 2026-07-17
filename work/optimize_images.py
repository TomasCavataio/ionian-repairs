from pathlib import Path
from PIL import Image

project = Path(__file__).resolve().parents[1]
source_root = project / "work" / "image-sources"
output_root = project / "public" / "images"
for name in ("hero-provisional", "bathroom-provisional"):
    source = source_root / f"{name}.png"
    with Image.open(source) as image:
        rgb = image.convert("RGB")
        for width in (768, 1536):
            height = round(rgb.height * width / rgb.width)
            resized = rgb if width == rgb.width else rgb.resize((width, height), Image.Resampling.LANCZOS)
            resized.save(output_root / f"{name}-{width}.webp", "WEBP", quality=82, method=6)
            resized.save(output_root / f"{name}-{width}.jpg", "JPEG", quality=84, optimize=True, progressive=True)
