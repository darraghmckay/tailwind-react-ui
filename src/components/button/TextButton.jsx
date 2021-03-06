import React, { forwardRef } from 'react'

import Button from './Button'

/**
 * @see See [Button](#button-2) for API. Sets `buttonStyle` prop to `text`.
 */
const TextButton = forwardRef((props, ref) => (
  <Button ref={ref} {...props} buttonStyle="text" />
))

export default TextButton
