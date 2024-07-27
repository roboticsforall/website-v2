import { Navbar } from "@/app/components/Navbar/Navbar";
import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { SliceZone } from "@prismicio/react";
import { notFound } from "next/navigation";

type PageParams = {
  uid: string;
};

export default async function Page({ params }: { params: PageParams }) {
  const client = createClient();

  const page = await client
    .getByUID("page", params.uid)
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
    uid: page.uid,
  }));
}
