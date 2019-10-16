import styled from "styled-components";
import propTypes, { propType } from "@styled-system/prop-types";
import { color, background, border, shadow, compose } from "styled-system";

import { Box } from "./box";

export const Bloc = styled(Box)(
  compose(
    color,
    background,
    border,
    shadow
  )
);

Box.propTypes = {
  ...propTypes.color,
  ...propTypes.background,
  ...propTypes.border,
  ...propTypes.shadow
};

export default Bloc;
