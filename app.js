import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const supabaseUrl = "https://ojsugtpsdpmbookjbnpr.supabase.co";
const supabaseKey = "sb_publishable_x71PHWDP30kKoPzScFbrUA_1E8NeZ-2";

const supabase = createClient(supabaseUrl, supabaseKey);

console.log("Supabase client created successfully!", supabase);