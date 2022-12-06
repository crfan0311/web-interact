import VerticalDefault from "../../layouts/vertical-default/VerticalDefault";
import SoloPage from "../../layouts/solo-page/SoloPage";

export const LAYOUT_NAMES = {
    VERTICAL_DEFAULT: "vertical-default",
    SOLO_PAGE: "solo-page",
};

export const LAYOUTS = [
    {
        name: LAYOUT_NAMES.VERTICAL_DEFAULT,
        label: "Vertical Default",
        component: VerticalDefault,
    },
    {
        name: LAYOUT_NAMES.SOLO_PAGE,
        label: "Solo Page",
        component: SoloPage
    }
];