import React from 'react'
import './ColorSamples.scss'

export const ColorSamples = () => {
  const greyScale = [
    '--color-grey-050',
    '--color-grey-100',
    '--color-grey-200',
    '--color-grey-300',
    '--color-grey-400',
    '--color-grey-500',
    '--color-grey-600',
    '--color-grey-700',
    '--color-grey-800',
    '--color-grey-900',
  ]

  const primaryScale = [
    '--color-primary-050',
    '--color-primary-100',
    '--color-primary-200',
    '--color-primary-300',
    '--color-primary-400',
    '--color-primary-500',
    '--color-primary-600',
    '--color-primary-700',
    '--color-primary-800',
    '--color-primary-900',
  ]

  const successScale = [
    '--color-success-050',
    '--color-success-100',
    '--color-success-200',
    '--color-success-300',
    '--color-success-400',
    '--color-success-500',
    '--color-success-600',
    '--color-success-700',
    '--color-success-800',
    '--color-success-900',
  ]

  const warningScale = [
    '--color-warning-050',
    '--color-warning-100',
    '--color-warning-200',
    '--color-warning-300',
    '--color-warning-400',
    '--color-warning-500',
    '--color-warning-600',
    '--color-warning-700',
    '--color-warning-800',
    '--color-warning-900',
  ]

  const dangerScale = [
    '--color-danger-050',
    '--color-danger-100',
    '--color-danger-200',
    '--color-danger-300',
    '--color-danger-400',
    '--color-danger-500',
    '--color-danger-600',
    '--color-danger-700',
    '--color-danger-800',
    '--color-danger-900',
  ]

  const scales = [
    greyScale,
    primaryScale,
    successScale,
    warningScale,
    dangerScale,
  ]
  return (
    <div className="ColorSamples">
      <p>Hello from the ColorSamples component</p>
      {scales.map((scale) => (
        <div className="ColorSamples__color-scale">
          {scale.map((colorToken) => (
            <div
              className="ColorSamples__color-swatch"
              style={{ backgroundColor: `var(${colorToken})` }}
            />
          ))}
        </div>
      ))}
    </div>
  )
}