"use client";
import { Container, Show } from "@chakra-ui/react";
import { GlobalNavigationDocument } from "@/prismicio-types";
import { BackgroundColor } from "../BackgroundColor";
import { MobileNav } from "./MobileNav";
import { DesktopNav } from "./DesktopNav";

interface NavbarProps {
  navbar_color?: string;
  navigation: GlobalNavigationDocument<string>;
}

export function Navbar({ navbar_color, navigation }: NavbarProps) {
  return (
    <nav style={{ borderBottomColor: "lightgray", borderBottomWidth: 1 }}>
      <BackgroundColor backgroundColor={navbar_color || "white"}>
        <Container py={3} size={[null, "sm", "md", "lg", "xl", "2xl"]}>
          <Show above="md">
            <DesktopNav {...navigation} />
          </Show>
          <Show below="md">
            <MobileNav {...navigation} />
          </Show>
        </Container>
      </BackgroundColor>
    </nav>
  );
}
