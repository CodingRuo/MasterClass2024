import { createClient } from "@supabase/supabase-js";
import type { Database } from "../../database/types";

const supabase = createClient<Database>(
    import.meta.env.VITE_SUPER_URL,
    import.meta.env.VITE_SUPER_SECRET_KEY,
);

export { supabase };
