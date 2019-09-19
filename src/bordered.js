import styled from 'styled-components'
import { color, borders, borderColor, borderRadius, opacity, boxShadow } from 'styled-system'

import { Box } from './box'


export const Bordered = styled(Box) (
  {
    overflow: 'hidden'
  },

  // core
  color,
  
  // borders
  borders,
  borderColor,
  borderRadius,

  // effects
  opacity,
  boxShadow
)


Box.propTypes = {
  ...color.propTypes,
  ...borders.propTypes,
  ...borderColor.propTypes,
  ...borderRadius.propTypes,
  ...opacity.propTypes,
  ...boxShadow.propTypes
}


export default Bordered
