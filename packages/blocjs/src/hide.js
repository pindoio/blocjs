import { system } from "styled-system";

const config = {
  hide: {
    property: "display",
    transform: n => (n ? "none" : "block")
  }
};

const hide = system(config);

export default hide;
