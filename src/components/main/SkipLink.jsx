import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

import { Box } from '../primitives'
import { FillButton } from '../button'

const SkipLink = forwardRef(({ children, href, ...rest }, ref) => (
  <Box visuallyHiddenFocusable>
    <FillButton
      is="a"
      bg="white"
      text="black"
      absolute
      rounded="none"
      href={href}
      ref={ref}
      {...rest}
    >
      {children || 'Skip to main content'}
    </FillButton>
  </Box>
))

SkipLink.propTypes = {
  children: PropTypes.node,
  href: PropTypes.string,
}

SkipLink.defaultProps = {
  children: undefined,
  href: '#main',
}

export default SkipLink
