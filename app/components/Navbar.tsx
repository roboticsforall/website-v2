import { createClient, repositoryName } from "@/prismicio";
import { PrismicNextLink } from "@prismicio/next";

export async function Navbar() {
  const client = createClient();
  const navigation = await client.getByUID("navigation", "global-nav"); // UPDATE THE UID TO MATCH YOURS
  console.log(navigation.data.slices[0]?.primary.link);
  console.log(navigation.data.slices[1]?.primary.link);

  return (
    <nav>
      <ul>
        {/* Renders top-level links. */}
        {navigation.data.slices.map((slice) => {
          return (
            <li key={slice.id}>
              <PrismicNextLink field={slice.primary.link}>
                {slice.primary.name}
              </PrismicNextLink>

              {/* Renders child links, if present. */}
              {slice.primary.child_navigation.length > 0 && (
                <ul>
                  {slice.primary.child_navigation.map((item) => {
                    return (
                      <li key={JSON.stringify(item)}>
                        <PrismicNextLink field={item.link}>
                          {item.name}
                        </PrismicNextLink>
                      </li>
                    );
                  })}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
