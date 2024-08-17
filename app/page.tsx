import { SliceZone } from "@prismicio/react";
import { components } from "../slices";
import { createClient } from "@/prismicio";
import { notFound } from "next/navigation";

export default async function Home() {
  const client = createClient();

  const page = await client.getSingle("home_page").catch(() => notFound());

  return <SliceZone slices={page.data.slices} components={components} />;
}