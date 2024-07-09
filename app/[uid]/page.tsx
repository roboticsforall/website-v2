import { createClient } from "@/prismicio";
import { notFound } from "next/navigation";
import { GetStaticPropsContext } from "next";
import { ContentRelationshipField } from "@prismicio/client";

type PageParams = {
  uid: string;
};

export default async function Page({ params }: { params: PageParams }) {
  const client = createClient();
  console.log("My params " + params.uid);

  const page = await client
    .getByUID("page", params.uid)
    .catch(() => notFound());

  return <h1>{params.uid}</h1>;
}

export async function generateStaticParams() {
  const client = createClient();

  const pages = await client.getAllByType("page", { fetchLinks: "page.uid" });
  console.log(pages[0].data);

  return pages.map((page) => ({
    category: page.data.category,
    uid: page.uid,
  }));
}
