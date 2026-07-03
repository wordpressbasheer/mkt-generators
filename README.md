# MKT Generators Platform v1.0

Production-oriented Next.js starter for MKT Generators.

## Public branding rules
- Full Generator is source data only; it is not shown publicly.
- FB series becomes MB series.
- FP series becomes MP series.
- FC series becomes MC series.
- D300 controller text becomes Deep Sea Controller.
- Datasheet pages are generated as MKT-branded pages and can be printed/saved as PDF.

## Included
- Homepage with 3D generator hero.
- Products catalog with filters.
- Product detail pages.
- MKT datasheet pages.
- RFQ list and RFQ form.
- Downloads library.
- Admin preview.
- Supabase schema for future editable database.
- 90 model records: Baudouin MB, Perkins MP, Cummins MC.

## Run locally
```bash
npm install
npm run dev
```
Open: http://localhost:3000

## Build
```bash
npm run build
npm run start
```

## Important
Some Perkins and Cummins source PDF split parts were not fully available in the upload, so their detailed engine model fields are marked "To be confirmed from original datasheet". Baudouin PDFs were available and many fields were parsed.
