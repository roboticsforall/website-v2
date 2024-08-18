import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { SliceZone } from "@prismicio/react";
import { notFound } from "next/navigation";

type PageParams = {
  category: string;
};

export const dynamic = "force-dynamic";

export default async function Page({ params }: { params: PageParams }) {
  const client = createClient();

  const page = await client
    .getByUID("page", params.category)
    .catch(() => notFound());

  return <SliceZone slices={page.data.slices} components={components} />;
}

export async function generateStaticParams() {
  const client = createClient();

  const pages = await client.getAllByType("page");

  return pages.map((page) => ({
    category: page.uid,
  }));
}
