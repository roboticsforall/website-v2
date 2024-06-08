import Image from "next/image";
import styles from "./page.module.css";
import { SliceZone } from "@prismicio/react";
import { components } from "../slices";
import { createClient } from "@/prismicio";

export default async function Home() {
  const client = createClient();

  const page = await client.getByUID("home_page", "home_page");

  return <SliceZone slices={page.data.slices} components={components} />;
}
