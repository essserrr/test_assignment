import "@emotion/react";

import { Theme as TheTheme } from "styles/theme";

declare module "@emotion/react" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface Theme extends TheTheme {}
}
