import styled from "styled-components";
import { color, background, border, shadow, compose } from "styled-system";

import Box from "./box";

const Bloc = styled(Box)(
  compose(
    color,
    background,
    border,
    shadow
  )
);

export default Bloc;
