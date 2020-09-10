import React, { useEffect, useCallback } from 'react'
import './ContrastColorsManager.scss'
import {
  generateContrastColors,
} from '@adobe/leonardo-contrast-colors'
import { ColorSwatch } from 'components'

const generateMyContrastColors = (colorKeys: string[]) => {
  return generateContrastColors({
    colorKeys: colorKeys,
    base: '#ffffff',
    ratios: [1.23, 1.63, 2.25, 3.01, 4.13, 5.07, 6.31, 8.21, 11.3, 15.06],
    colorspace: 'CAM02',
  })
}

export const ContrastColorsManager = () => {
  // const colorValues = [
  //   '050',
  //   '100',
  //   '200',
  //   '300',
  //   '400',
  //   '500',
  //   '600',
  //   '700',
  //   '800',
  //   '900',
  // ]

  // const contrastRatios = [
  //   1.23,
  //   1.63,
  //   2.25,
  //   3.01,
  //   4.13,
  //   5.07,
  //   6.31,
  //   8.21,
  //   11.3,
  //   15.06,
  // ]

  // const colorKeys = {
  //   primary: ['#dad6ff', '#b4adff', '#685bfb', '#1f148f'],
  //   grey: ['#848ca9', '#707689', '#454b5f', '#161d31'],
  //   success: ['#9ad09c', '#49a24c', '#0f8613', '#008504'],
  //   warning: ['#db9e43', '#b86e00', '#b86e00', '#804d00'],
  //   danger: ['#ff9ea3', '#ff525a', '#d0111a', '#8e0108'],
  // }

  // const colors = Object.keys(colorKeys).reduce((_colors: any, key) => {
  //   return
  // }, {})

  const primaryColors = generateMyContrastColors(['#4d3df7'])

  const greyColors = generateMyContrastColors(['#425870'])

  const successColors = generateMyContrastColors(['#0f8613'])

  const warningColors = generateMyContrastColors(['#de911d'])

  const dangerColors = generateMyContrastColors(['#cf1124'])

  const declarations = ['']
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
      <div className="ContrastColorsManager__button-group">
        <button onClick={addStyles}>add</button>
        <button onClick={removeStyles}>remove</button>
      </div>
    </div>
  )
}
