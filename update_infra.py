import re
import os
import shutil

src_dir = 'SFL Resorcs/Extracted_Images'
dest_dir = 'public/assets/infrastructure/extracted'
os.makedirs(dest_dir, exist_ok=True)

# Copy images
images = []
for f in os.listdir(src_dir):
    if f.lower().endswith(('.png', '.jpg', '.jpeg')):
        shutil.copy(os.path.join(src_dir, f), os.path.join(dest_dir, f))
        images.append(f)

# Sort images naturally (image1, image2, image10, etc)
images.sort(key=lambda x: int(re.search(r'\d+', x).group()) if re.search(r'\d+', x) else x)

infra_file = 'src/constants/infrastructure.ts'
with open(infra_file, 'r', encoding='utf-8') as f:
    content = f.read()

# For each image, we assign to the next available item in machineryList or instrumentList
# that does NOT already have an imagePath. (Or just assign sequentially to the first ones).
img_idx = 0

def replace_func(match):
    global img_idx
    line = match.group(0)
    if 'imagePath' in line:
        return line # already has image
    if img_idx < len(images):
        img_name = images[img_idx]
        img_idx += 1
        # Insert imagePath before the ending } or near category
        return line.replace(' },', f', imagePath: "/assets/infrastructure/extracted/{img_name}" }},')
    return line

# Match item lines, e.g. { id: 1, ... }
new_content = re.sub(r'\{ id: \d+.*?\},', replace_func, content)

with open(infra_file, 'w', encoding='utf-8') as f:
    f.write(new_content)

print(f"Mapped {img_idx} images.")
