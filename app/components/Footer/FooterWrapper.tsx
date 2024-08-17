import { createClient } from "@/prismicio";
import { notFound } from "next/navigation";
import { Footer } from "./Footer";

export async function FooterWrapper() {
  const client = createClient();
  const footer = await client
    .getSingle("global_navigation")
    .catch(() => notFound());

  return <Footer footer={footer} />;
}
