# MKT Generators Platform

Next.js starter for the MKT Generators website + future admin dashboard.

## Branding Rules
- Full Generator is used as source data only.
- Public brand is always MKT Generators.
- FB series becomes MB series.
- FP series becomes MP series.
- FC series becomes MC series.
- D300 controller text becomes Deep Sea Controller.

## Run Locally
```bash
npm install
npm run dev
```
Open: http://localhost:3000

## Pages
- `/` homepage with 3D generator hero
- `/generators` catalog with filters
- `/generators/mkt-mb20-baudouin-diesel-generator` product page
- `/admin` dashboard preview

## Supabase
Run `supabase/schema.sql` in Supabase SQL editor later.
Copy `.env.example` to `.env.local` and add Supabase keys.

## Next Step
Connect admin dashboard to Supabase and add PDF importer for all uploaded catalogs.
