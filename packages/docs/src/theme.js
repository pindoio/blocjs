const colors = {
  primary: "#2757B6",
  primaryDark: "#0D285C",
  primaryLight: "#89ACF0",
  primaries: [
    "#0D285C",
    "#183D85",
    "#2757B6",
    "#628EE4",
    "#89ACF0",
    "#AECAFF",
    "#CBDDFF",
    "#E8F0FF"
  ],
  accent: "#38CACA",
  accentDark: "#087C7C",
  accentLight: "#73F3F3",
  accents: [
    "#087C7C",
    "#24AFAF",
    "#38CACA",
    "#55E2E2",
    "#73F3F3",
    "#90FBFB",
    "#AFFFFF",
    "#E8FFFF"
  ],
  surface: "#F9FFFF",
  surfaces: ["#FFFFFF", "#F9FFFF", "#5D5E6E", "#EB5757"]
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
  sans: "'Public Sans', sans-serif",
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
