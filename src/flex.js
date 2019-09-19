import styled from 'styled-components'
import { flexDirection, flexWrap, justifyContent, alignItems, alignContent } from 'styled-system'
import { Box } from './box'


export const Flex = styled(Box) (
  {
    display: 'flex'
  },

  // flexbox container
  flexDirection,
  flexWrap,
  justifyContent,
  alignItems,
  alignContent
)


Box.propTypes = {
  ...flexDirection.propTypes,
  ...flexWrap.propTypes,
  ...justifyContent.propTypes,
  ...alignItems.propTypes,
  ...alignContent.propTypes
}


export default Flex
