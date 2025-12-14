#!/bin/bash

i=1

for file in *.jpg *.jpeg *.png *.gif *.webp; do
  # Skip if no files match
  [ -e "$file" ] || continue

  ext="${file##*.}"
  mv -- "$file" "food_${i}.${ext}"
  ((i++))
done
