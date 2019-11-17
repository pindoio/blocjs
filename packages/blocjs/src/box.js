import styled from "styled-components";
import propTypes from "@styled-system/prop-types";
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

Box.propTypes = {
  ...propTypes.space,
  ...propTypes.layout,
  ...propTypes.flexbox
};

export default Box;
