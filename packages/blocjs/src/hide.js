import { system } from "styled-system";

const hide = system({
  property: "display",
  transform: (value, scale) => (value ? "none" : "block")
});

export default hide;
