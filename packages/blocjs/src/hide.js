import styled from "styled-components";
import { system } from "styled-system";

import Box from "./box";

const hidden = system({
  hidden: {
    property: "display",
    transform: n => (n ? "none" : "block")
  }
});

const Hide = styled(Box)(hidden);

export default Hide;
