import styled from 'styled-components'
import { fontFamily, fontWeight, textAlign, lineHeight, letterSpacing } from 'styled-system'

import { Box } from './box'


const Text = styled(Box) (
  fontFamily,
  fontWeight,
  textAlign,
  lineHeight,
  letterSpacing
)


export default Text
