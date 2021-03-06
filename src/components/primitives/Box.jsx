import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

import Base from './Base'

const Box = forwardRef(
  ({ is, children, inline, inlineBlock, ...rest }, ref) => {
    const el = is === 'div' && (inline || inlineBlock) ? 'span' : is

    return (
      <Base
        is={el}
        inline={inline}
        inlineBlock={inlineBlock}
        ref={ref}
        {...rest}
      >
        {children}
      </Base>
    )
  },
)

Box.propTypes = {
  is: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.object]),
  children: PropTypes.node,
  inline: PropTypes.bool,
  inlineBlock: PropTypes.bool,
}

Box.defaultProps = {
  is: 'div',
  children: undefined,
  inline: false,
  inlineBlock: false,
}

export default Box
