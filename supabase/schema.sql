create table if not exists generators (
  id uuid primary key default gen_random_uuid(),
  public_model text not null,
  source_code text,
  series text,
  engine_brand text not null,
  engine_model text,
  standby_kva numeric,
  prime_kva numeric,
  frequency text default '50 Hz',
  voltage text default '400/230 V',
  type text default 'Silent / Open',
  controller text default 'Deep Sea Controller',
  cooling text default 'Water Cooling',
  dimensions jsonb,
  fuel_consumption jsonb,
  image_url text,
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
