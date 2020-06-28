const colors = {
  primary: "#FF3049",
  primaryDark: "#CF1229",
  primaryLight: "#FF7888",
  primaries: [
    "#CF1229",
    "#E5223A",
    "#FF3049",
    "#FF5E71",
    "#FF7888",
    "#FF96A3",
    "#FFB9C1",
    "#FFDCE0"
  ],
  accent: "#16C1AD",
  accentDark: "#088C7D",
  accentLight: "#8EF3E7",
  accents: [
    "#088C7D",
    "#0BAF9C",
    "#16C1AD",
    "#57E0D0",
    "#8EF3E7",
    "#BDFBF3",
    "#E4FFFC",
    "#F6FFFE"
  ],
  surface: "#FFF9F9",
  surfaces: ["#FFFFFF", "#FFF9F9", "#3E484D", "#EC0000"]
};
colors.lightAccent = colors["accents"][7];

const shadows = [
  "none",
  "0 0px 2px rgba(0,0,0,.08), 0 2px 4px rgba(0,0,0,.04), 0 8px 8px rgba(0,0,0,.02)",
  "0 0px 2px rgba(0,0,0,.08), 0 8px 8px rgba(0,0,0,.08), 0 16px 16px rgba(0,0,0,.08), 0 32px 32px rgba(0,0,0,.16)",
  "0 0px 2px rgba(0,0,0,.08), 0 8px 8px rgba(0,0,0,.08), 0 16px 16px rgba(0,0,0,.08), 0 32px 32px rgba(0,0,0,.16), 0 64px 64px rgba(0,0,0,.16)"
];

shadows.small = shadows[1];
shadows.medium = shadows[2];
shadows.large = shadows[3];

const fonts = {
  sans: "'Space Grotesk', sans-serif",
  mono: "Iosevka, Menlo, monospace"
};

const fontSizes = [9, 12, 16, 21, 28, 37, 49, 65];
const borders = [0, "1px solid", "2px solid"];
const breakpoints = [48, 64, 80].map(n => n + "em");
const space = [0, 2, 4, 8, 16, 24, 32, 40, 48, 56, 64];
const radii = space;
space.small = space[1];
space.medium = space[2];
space.large = space[3];

export default {
  colors,
  radii,
  space,
  borders,
  fontSizes,
  breakpoints,
  shadows,
  fonts,
  // button variants
  buttons: {
    primary: {
      color: colors.surface,
      backgroundColor: colors.primaryDark,
      "&:hover": {
        backgroundColor: colors.primary
      }
    },
    accent: {
      color: colors.surface,
      backgroundColor: colors.accentDark,
      "&:hover": {
        backgroundColor: colors.accent
      }
    }
  }
};
