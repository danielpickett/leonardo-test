import React, { useEffect, useCallback } from 'react'
import './ContrastColorsManager.scss'
import { generateContrastColors } from '@adobe/leonardo-contrast-colors'
import { ColorSwatch } from 'components'

const Para = ({ val }: { val: string }) => {
  return (
    <p style={{ color: `var(--color-primary-${val}` }}>
      Hello from the ContrastColorsManager component
    </p>
  )
}

const generateMyContrastColors = (colorKeys: string[]) => {
  return generateContrastColors({
    colorKeys: colorKeys,
    base: '#ffffff',
    ratios: [1.23, 1.63, 2.25, 3.01, 4.13, 5.07, 6.31, 8.21, 11.3, 15.06],
    colorspace: 'CAM02',
  })
}

export const ContrastColorsManager = () => {
  const primaryColors = generateMyContrastColors([
    '#e6e6ff',
    '#c4c6ff',
    '#a2a5fc',
    '#8888fc',
    '#7069fa',
    '#5d55fa',
    '#4d3df7',
    '#3525e6',
    '#1d0ebe',
    '#0c008c',
  ])

  const greyColors = generateMyContrastColors([
    '#f3f5f7',
    '#dae0e7',
    '#bac4ce',
    '#a0aebb',
    '#7d90a1',
    '#60758a',
    '#425870',
    '#32465d',
    '#223649',
    '#10273c',
  ])

  const successColors = generateMyContrastColors([
    '#e3f9e5',
    '#c1f2c7',
    '#91e697',
    '#51ca58',
    '#31b237',
    '#18981d',
    '#0f8613',
    '#0e7817',
    '#07600e',
    '#014807',
  ])

  const warningColors = generateMyContrastColors([
    '#fffbea',
    '#fff3c4',
    '#fce588',
    '#fadb5f',
    '#f7c948',
    '#f0b429',
    '#de911d',
    '#cb6e17',
    '#b44d12',
    '#8d2b0b',
  ])

  const dangerColors = generateMyContrastColors([
    '#ffe3e3',
    '#ffbdbd',
    '#ff9b9b',
    '#f86a6a',
    '#ef4e4e',
    '#e12d39',
    '#cf1124',
    '#ab091e',
    '#8a041a',
    '#610316',
  ])

  const declarations = [
    `--color-primary-050:${primaryColors[0]};`,
    `--color-primary-100:${primaryColors[1]};`,
    `--color-primary-200:${primaryColors[2]};`,
    `--color-primary-300:${primaryColors[3]};`,
    `--color-primary-400:${primaryColors[4]};`,
    `--color-primary-500:${primaryColors[5]};`,
    `--color-primary-600:${primaryColors[6]};`,
    `--color-primary-700:${primaryColors[7]};`,
    `--color-primary-800:${primaryColors[8]};`,
    `--color-primary-900:${primaryColors[9]};`,

    `--color-grey-050:${greyColors[0]};`,
    `--color-grey-100:${greyColors[1]};`,
    `--color-grey-200:${greyColors[2]};`,
    `--color-grey-300:${greyColors[3]};`,
    `--color-grey-400:${greyColors[4]};`,
    `--color-grey-500:${greyColors[5]};`,
    `--color-grey-600:${greyColors[6]};`,
    `--color-grey-700:${greyColors[7]};`,
    `--color-grey-800:${greyColors[8]};`,
    `--color-grey-900:${greyColors[9]};`,

    `--color-success-050:${successColors[0]};`,
    `--color-success-100:${successColors[1]};`,
    `--color-success-200:${successColors[2]};`,
    `--color-success-300:${successColors[3]};`,
    `--color-success-400:${successColors[4]};`,
    `--color-success-500:${successColors[5]};`,
    `--color-success-600:${successColors[6]};`,
    `--color-success-700:${successColors[7]};`,
    `--color-success-800:${successColors[8]};`,
    `--color-success-900:${successColors[9]};`,

    `--color-warning-050:${warningColors[0]};`,
    `--color-warning-100:${warningColors[1]};`,
    `--color-warning-200:${warningColors[2]};`,
    `--color-warning-300:${warningColors[3]};`,
    `--color-warning-400:${warningColors[4]};`,
    `--color-warning-500:${warningColors[5]};`,
    `--color-warning-600:${warningColors[6]};`,
    `--color-warning-700:${warningColors[7]};`,
    `--color-warning-800:${warningColors[8]};`,
    `--color-warning-900:${warningColors[9]};`,

    `--color-danger-050:${dangerColors[0]};`,
    `--color-danger-100:${dangerColors[1]};`,
    `--color-danger-200:${dangerColors[2]};`,
    `--color-danger-300:${dangerColors[3]};`,
    `--color-danger-400:${dangerColors[4]};`,
    `--color-danger-500:${dangerColors[5]};`,
    `--color-danger-600:${dangerColors[6]};`,
    `--color-danger-700:${dangerColors[7]};`,
    `--color-danger-800:${dangerColors[8]};`,
    `--color-danger-900:${dangerColors[9]};`,
  ]
  const rule = `:root {${declarations.join('')}}`
  const style = document.createElement('style')
  style.textContent = rule

  const addStyles = useCallback(() => {
    document.head.appendChild(style)
  }, [style])

  const removeStyles = () => {
    style.remove()
  }

  useEffect(() => {
    addStyles()
  }, [addStyles, rule])

  return (
    <div className="ContrastColorsManager">
      <div className="ContrastColorsManager__swatches">
        {primaryColors.map((color) => (
          <ColorSwatch color={color} />
        ))}
      </div>
      <div className="ContrastColorsManager__swatches">
        {greyColors.map((color) => (
          <ColorSwatch color={color} />
        ))}
      </div>
      <div className="ContrastColorsManager__swatches">
        {successColors.map((color) => (
          <ColorSwatch color={color} />
        ))}
      </div>
      <div className="ContrastColorsManager__swatches">
        {warningColors.map((color) => (
          <ColorSwatch color={color} />
        ))}
      </div>
      <div className="ContrastColorsManager__swatches">
        {dangerColors.map((color) => (
          <ColorSwatch color={color} />
        ))}
      </div>
      <Para val="100" />
      <Para val="200" />
      <div className="ContrastColorsManager__button-group">
        <button onClick={addStyles}>add</button>
        <button onClick={removeStyles}>remove</button>
      </div>
    </div>
  )
}
