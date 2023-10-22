import { createClient } from "@supabase/supabase-js";
import { toast } from "sonner";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error("Supabase URL and API key are required.");
}

const supabase = createClient(supabaseUrl, supabaseKey);

export const handleSignOut = async () => {
  const { error } = await supabase.auth.signOut();

  if (error) {
    console.error("Error signing out:", error.message);
    toast.error(error.message);
  } else {
    toast.success("Successfully signed out");
  }
};

export default supabase;
