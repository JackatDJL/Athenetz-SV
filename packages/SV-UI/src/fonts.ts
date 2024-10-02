import localfont from "next/font/local";

const oxanium = localfont({
  src: [
    {
      path: "/fonts/oxanium.ttf",
    },
  ],
  display: "swap",
});

const bungee = localfont({
  src: [
    {
      path: "/fonts/bungee/regular.ttf",
      style: "redular",
    },
    {
      path: "/fonts/bungee/hairline.ttf",
      style: "hairline",
    },
    {
      path: "/fonts/bungee/inline.ttf",
      style: "inline",
    },
    {
      path: "/fonts/bungee/outline.ttf",
      style: "outline",
    },
    {
      path: "/fonts/bungee/shade.ttf",
      style: "shade",
    },
    {
      path: "/fonts/bungee/spice.ttf",
      style: "spice",
    },
    {
      path: "/fonts/bungee/tint.ttf",
      style: "tint",
    },
  ],
  display: "swap",
});

export { oxanium, bungee };
