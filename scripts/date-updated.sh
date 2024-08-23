#!/bin/bash

# chmod +x scripts/date-updated.sh
# ./scripts/date-updated.sh

for file in _posts/*.md; do
  # Check if the file contains last_modified in the front matter
  if grep -q '^last_modified:' "$file"; then
    last_modified=$(git log -1 --format="%ad" --date=iso "$file")
    echo "Processing file: $file"
    echo "Last modified date: $last_modified"
    
    # Use awk to update the last_modified in the front matter
    awk -v date="$last_modified" '
    BEGIN { inside_front_matter=0 }
    /^---$/ { inside_front_matter++ }
    {
      if (inside_front_matter == 1 && /^last_modified:/) {
        print "last_modified: " date;
      } else {
        print $0;
      }
    }
    ' "$file" > tmpfile && mv tmpfile "$file"
  fi
done
