import dynamic from "next/dynamic";

export const AppbarWithoutSSR = dynamic(() => import("./appbar/Appbar"), {
  ssr: false,
});

export const BokehsWithoutSSR = dynamic(() => import("./Bokeh"), {
  ssr: false,
});
