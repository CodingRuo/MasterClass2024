import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
    import.meta.env.VITE_SUPER_URL,
    import.meta.env.VITE_SUPER_SECRET_KEY,
);

export { supabase };
