import styled from "styled-components";
import {
  space,
  layout,
  position,
  flexbox,
  compose,
  system
} from "styled-system";

const Box = styled("div")(
  {
    boxSizing: "border-box"
  },
  compose(
    space,
    layout,
    position,
    flexbox
  ),
  system({
    hide: {
      property: "display",
      transform: n => (n ? "none" : "block")
    }
  })
);

export default Box;
