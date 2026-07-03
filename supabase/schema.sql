create table if not exists generators (
  id uuid primary key default gen_random_uuid(),
  model text not null,
  source_code text,
  series text,
  engine_brand text not null,
  engine_model text,
  standby_kva numeric,
  prime_kva numeric,
  standby_kw numeric,
  prime_kw numeric,
  frequency text,
  voltage text,
  type text,
  cooling text,
  controller text default 'Deep Sea Controller',
  dimensions jsonb,
  weight jsonb,
  fuel_tank text,
  fuel_consumption jsonb,
  image_url text,
  datasheet_url text,
  slug text unique not null,
  created_at timestamptz default now()
);

create table if not exists rfq_requests (
  id uuid primary key default gen_random_uuid(),
  customer_name text,
  email text,
  phone text,
  company text,
  message text,
  selected_generators jsonb,
  created_at timestamptz default now()
);
