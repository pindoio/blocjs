import styled from "styled-components";
import { system } from "styled-system";

import Box from "./box";

const config = {
  breakpoints: {
    property: "display",
    transform: n => (n ? "none" : "block")
  }
};

config.bp = config.breakpoints;

const breakpoints = system(config);

const Hide = styled(Box)(breakpoints);
export default Hide;
