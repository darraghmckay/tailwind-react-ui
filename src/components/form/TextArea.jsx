import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

import { withTheme } from '../theme'
import { Touchable } from '../primitives'

const TextArea = forwardRef(
  (
    {
      theme,
      is,
      field,
      children,
      id,
      name,
      disabled,
      readOnly,
      invalid,
      ...rest
    },
    ref,
  ) => {
    const describedBy = [field.errorId, field.helpId].filter(by => by)
    const isInvalid = field.invalid || invalid

    return (
      <Touchable
        is={is}
        appearance="none"
        bg="white"
        rounded={theme.radius}
        text={theme.textColors.body}
        p={{ x: theme.spacing.md, y: theme.spacing.sm }}
        m={{ b: theme.spacing.sm }}
        border={!isInvalid ? true : [true, theme.brandColors.danger]}
        w="full"
        leading="tight"
        id={field.inputId || id || name}
        name={name}
        disabled={field.disabled || disabled}
        readOnly={readOnly}
        aria-invalid={isInvalid || undefined}
        aria-describedby={
          describedBy.length ? describedBy.join(' ') : undefined
        }
        ref={ref}
        {...rest}
      />
    )
  },
)

TextArea.propTypes = {
  theme: PropTypes.shape({}).isRequired,
  is: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.object]),
  field: PropTypes.shape({
    inputId: PropTypes.string,
    invalid: PropTypes.bool,
    disabled: PropTypes.bool,
  }),
  children: PropTypes.node,
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  readOnly: PropTypes.bool,
  invalid: PropTypes.bool,
}

TextArea.defaultProps = {
  is: 'textarea',
  field: {},
  children: undefined,
  id: undefined,
  disabled: false,
  readOnly: false,
  invalid: false,
}

export { TextArea as component }
export default withTheme(TextArea)
