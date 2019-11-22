import { system } from "styled-system";
import { styled } from "styled-components";

import { Box } from "./box";

const hidden = system({
  hidden: {
    property: "display",
    transform: n => (n ? "none" : "block")
  }
});

const Hide = styled(Box)(hidden);

export default Hide;
