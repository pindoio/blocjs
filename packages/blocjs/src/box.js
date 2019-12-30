import styled from "styled-components";
import { space, layout, position, flexbox, compose } from "styled-system";

const Box = styled("div")(
  {
    boxSizing: "border-box"
  },
  compose(
    space,
    layout,
    position,
    flexbox
  )
);

export default Box;
