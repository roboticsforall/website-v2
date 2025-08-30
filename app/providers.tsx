// app/providers.tsx
"use client";

import { ChakraProvider } from "@chakra-ui/react";
import { system } from "./theme";

export function Providers({ children }: { children: React.ReactNode }) {
  return <ChakraProvider value={system}>{children}</ChakraProvider>;
}

// app/providers.tsx
// "use client";

// import { ChakraProvider } from "@chakra-ui/react";
// import { theme } from "./theme/theme";

// export function Providers({ children }: { children: React.ReactNode }) {
//   return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
// }

