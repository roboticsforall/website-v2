import { SliceZone } from "@prismicio/react";
import { components } from "../slices";
import { createClient } from "@/prismicio";
import { notFound } from "next/navigation";
import { Navbar } from "./components/Navbar/Navbar";

export default async function Home() {
  const client = createClient();

  const page = await client.getSingle("home_page").catch(() => notFound());
  const navigation = await client
    .getSingle("global_navigation")
    .catch(() => notFound());

  return (
    <>
      <Navbar navbar_color={page.data.navbar_color} navigation={navigation} />
      <SliceZone slices={page.data.slices} components={components} />
    </>
  );
}