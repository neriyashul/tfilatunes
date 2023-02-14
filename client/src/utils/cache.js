import createCache from "@emotion/cache";
import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";

export const cache = createCache({
    stylisPlugins: [prefixer, rtlPlugin],
    key: 'muirtl',
});