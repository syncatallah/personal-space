import styled from "@emotion/styled"
import shouldForwardProp from "@styled-system/should-forward-prop"

import {
  space,
  width,
  maxWidth,
  display,
  alignItems,
  justifyContent,
  fontSize,
  fontWeight,
  textAlign,
  color,
  borders,
  borderColor,
  borderRadius,
  textStyle
} from "styled-system"

const BlockLinkGrow = styled('a', { shouldForwardProp })(
  space,
  width,
  maxWidth,
  display,
  fontSize,
  fontWeight,
  textAlign,
  textStyle,
  color,
  alignItems,
  justifyContent,
  borders,
  borderColor,
  borderRadius,
  {
    boxSizing: "border-box",
    backfaceVisibility: 'hidden',
    opacity: .75,
    transition: 'transform 0.25s ease-out',
    ":hover": {
      cursor: "pointer",
      opacity: 1,
      transition: 'scale(1.05)',
      color: '',
    }
  }
)

BlockLinkGrow.defaultProps = {
  bg: "transparent",
  cursor: "pointer"
}

export default BlockLinkGrow
