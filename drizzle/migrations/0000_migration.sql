CREATE TYPE public.account_type AS ENUM ('professional','employer','mentor','organization');

CREATE TABLE public.profiles (
  id uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  full_name text NOT NULL DEFAULT '',
  email text,
  location text NOT NULL DEFAULT '',
  account_type public.account_type NOT NULL DEFAULT 'professional',
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT, UPDATE ON public.profiles TO authenticated;
GRANT ALL ON public.profiles TO service_role;
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users read own profile" ON public.profiles FOR SELECT TO authenticated USING (auth.uid() = id);
CREATE POLICY "Users update own profile" ON public.profiles FOR UPDATE TO authenticated USING (auth.uid() = id) WITH CHECK (auth.uid() = id);

CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
DECLARE t public.account_type;
BEGIN
  BEGIN
    t := COALESCE(NULLIF(NEW.raw_user_meta_data->>'account_type',''),'professional')::public.account_type;
  EXCEPTION WHEN others THEN t := 'professional';
  END;
  INSERT INTO public.profiles (id, full_name, email, location, account_type)
  VALUES (NEW.id, LEFT(COALESCE(NEW.raw_user_meta_data->>'full_name',''),100), NEW.email,
          LEFT(COALESCE(NEW.raw_user_meta_data->>'location',''),100), t);
  RETURN NEW;
END; $$;

CREATE TRIGGER on_auth_user_created AFTER INSERT ON auth.users
FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();