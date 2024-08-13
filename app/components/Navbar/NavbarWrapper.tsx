import { createClient } from "@/prismicio";
import { notFound } from "next/navigation";
import { Navbar } from "./Navbar";

export async function NavbarWrapper() {
  const client = createClient();
  const navigation = await client
    .getSingle("global_navigation")
    .catch(() => notFound());

  return <Navbar navigation={navigation} />;
}
