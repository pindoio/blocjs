import styled from "styled-components";
import { space, layout, flexbox, compose } from "styled-system";

const Box = styled("div")(
  {
    boxSizing: "border-box"
  },
  compose(
    space,
    layout,
    flexbox
  )
);

export default Box;
