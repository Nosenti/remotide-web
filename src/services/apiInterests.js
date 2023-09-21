import supabase from "./supabase";
export async function getInterests() {
  let { data, error } = await supabase.from("interests").select("*");

  if (error) {
    console.log("cabins could not be loaded");
    throw new Error("Cabins could not be loaded");
  }

  return data;
}
