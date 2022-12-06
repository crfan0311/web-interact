import {
  DENSITIES,
  LAYOUT_CONTAINER_STYLES,
  POSITION_TYPES,
} from "@jumbo/utils/constants/layout";
import { mainTheme } from "../themes/main/interact";
import { headerTheme } from "../themes/header/interact";
import { sidebarTheme } from "../themes/sidebar/interact";
import { footerTheme } from "../themes/footer/interact";

const config = {
  activeLayout: "vertical-default",
  containerStyle: LAYOUT_CONTAINER_STYLES.FLUID,
  useImagePlaceHolder: false,
  theme: {
    main: mainTheme,
    header: {
      ...mainTheme,
      ...headerTheme,
    },
    sidebar: {
      ...mainTheme,
      ...sidebarTheme,
    },
    footer: {
      ...mainTheme,
      ...footerTheme,
    },
  },
  defaultContentLayout: {
    base: {
      density: DENSITIES.STANDARD,
    },
    root: {
      container: LAYOUT_CONTAINER_STYLES.FLUID,
      sx: {}, //for content layout wrapper
    },
    wrapper: {
      sx: {},
    },
    sidebar: {
      type: POSITION_TYPES.DEFAULT,
      width: 250,
      minWidth: 80,
      open: true,
      sx: {},
    },
    main: {
      sx: {},
    },
    header: {
      type: POSITION_TYPES.DEFAULT,
      spreadOut: true,
      sx: {},
    },
    content: {
      sx: {},
    },
    footer: {
      type: POSITION_TYPES.DEFAULT,
      spreadOut: true,
      sx: {},
    },
  },
};

export { config };
