import styled from 'styled-components'
import {
  alignSelf, flex, flexBasis, fontSize,
  justifySelf, order, space, width
} from 'styled-system'


export const Box = styled('div') (
  {
    boxSizing: 'border-box'
  },

  // core
  space,
  width,
  fontSize,

  // flexbox related
  alignSelf,
  order,
  flex,
  flexBasis
)


Box.propTypes = {
  ...space.propTypes,
  ...width.propTypes,
  ...fontSize.propTypes,
  ...alignSelf.propTypes,
  ...order.propTypes,
  ...flex.propTypes,
  ...flexBasis.propTypes
}


export default Box
