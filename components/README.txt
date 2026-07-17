NORTH POINT GALLERY FIX

1. Replace:
   components/MediaGallery.tsx
   with the included MediaGallery.tsx file.

2. Open:
   app/globals.css

3. Find and delete the existing rules beginning with:
   .mediaGrid
   .mediaTile
   .mediaTile img
   .mediaTileCopy
   .mediaOverlay
   .mediaModal
   .mediaModal>img
   .mediaModalCopy
   .mediaClose

4. Paste the full content of gallery-fix.css at the end of globals.css.

5. Save, commit to website-v2 and push origin.

This solution:
- crops the embedded text from the bottom of the source renders;
- places category/title in a clean white caption panel;
- avoids double or overlapping text;
- improves desktop and mobile readability.
