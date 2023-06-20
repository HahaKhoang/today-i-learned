import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://spyxpzbsoivpadnuksog.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNweXhwemJzb2l2cGFkbnVrc29nIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODcyNzE5MzAsImV4cCI6MjAwMjg0NzkzMH0.xgWdis01QgpNmxyyefTIdt0icgHP2oIyw9ugs7esPnk";
const supabase = createClient(supabaseUrl, supabaseKey);
