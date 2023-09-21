import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://xigbtilykkbdqsxdalqd.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhpZ2J0aWx5a2tiZHFzeGRhbHFkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTUyNjIwOTQsImV4cCI6MjAxMDgzODA5NH0.zAvRR7JgKWdyuJCQisJXWguRemL6AHyGWo8co1COCiU";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
