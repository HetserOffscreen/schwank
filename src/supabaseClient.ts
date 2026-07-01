import { createClient } from "@supabase/supabase-js";

// You can find these in your Supabase Dashboard under Project Settings -> API
const supabaseUrl = "https://pkjgcoijtdxhecoihikz.supabase.co";
const supabaseAnonKey = "sb_publishable_gojHY1yhzLTJ53UlUG_Z9w_XraRPzxo";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);