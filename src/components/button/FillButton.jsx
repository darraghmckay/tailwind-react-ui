import React, { forwardRef } from 'react'

import Button from './Button'

/**
 * @see See [Button](#button-2) for API. Sets `buttonStyle` prop to `fill`.
 */
const FillButton = forwardRef((props, ref) => (
  <Button ref={ref} {...props} buttonStyle="fill" />
))

export default FillButton
