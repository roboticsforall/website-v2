import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { SliceZone } from "@prismicio/react";
import { notFound } from "next/navigation";
import { Navbar } from "../components/Navbar/Navbar";

type PageParams = {
  category: string;
};

export default async function Page({ params }: { params: PageParams }) {
  const client = createClient();
  console.log("My params " + params.category);

  const page = await client
    .getByUID("page", params.category)
    .catch(() => notFound());
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

export async function generateStaticParams() {
  const client = createClient();

  const pages = await client.getAllByType("page");

  return pages.map((page) => ({
    category: page.uid,
  }));
}
