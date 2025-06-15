import { SliceZone } from "@prismicio/react";
import { components } from "../slices";
import { createClient } from "@/prismicio";
import { notFound } from "next/navigation";
// import PopOutBox from './components/PopOutBox';

export default async function Home() {
  const client = createClient();

  const page = await client.getSingle("home_page").catch(() => notFound());

  return (
    <div>
      {/* <PopOutBox /> */}
      <SliceZone slices={page.data.slices} components={components} />
    </div>
  );
}