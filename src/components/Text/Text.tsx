import React from 'react'
import './Text.scss'

export const Text = ({
  color,
  contrast,
  onBackground,
}: {
  color: 'primary' | 'grey' | 'success' | 'warning' | 'danger'
  contrast: 'high' | 'medium' | 'low'
  onBackground:
    | '010'
    | '050'
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900'
}) => {


  // const wrapperClasses = classNames('Text', {
    
  // })
  return (
    <div className="Text">
      <p>Hello from the Text component</p>
    </div>
  )
}
