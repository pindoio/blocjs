import styled from "styled-components";
import { space, layout, position, flexbox, compose } from "styled-system";

import hide from "./hide";

const Box = styled("div")(
  {
    boxSizing: "border-box"
  },
  compose(
    space,
    layout,
    position,
    flexbox,
    hide
  )
);

export default Box;
