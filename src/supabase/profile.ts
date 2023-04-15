import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://fytwjmwwyrsfprnwvdsx.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ5dHdqbXd3eXJzZnBybnd2ZHN4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODE1MjY2MTQsImV4cCI6MTk5NzEwMjYxNH0.XfbkL6Oh98d8Rv7Xjzm2aRCDgl2ya6iKbHz_HdehPbk"
);

export default supabase;
