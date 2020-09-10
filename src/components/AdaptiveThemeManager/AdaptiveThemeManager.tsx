import React, { useEffect, useState, ChangeEvent } from 'react'
import './AdaptiveThemeManager.scss'
import {
  generateAdaptiveTheme,
  Colorspace,
} from '@adobe/leonardo-contrast-colors'

type ScalesSrcType = {
  primary: string[]
  success: string[]
  warning: string[]
  danger: string[]
  grey: string[]
}

type ColorScalesType = {
  name: string
  colorKeys: string[]
  colorspace: Colorspace
  ratios: number[] | { [key: string]: number }
}[]

export const AdaptiveThemeManager = () => {
  const [brightness, setBrightness] = useState(100)
  const [contrast, setContrast] = useState(1)

  const colorKeys = {
    grey: ['#6f7690', '#707689', '#454b5f', '#161d31'],
    primary: ['#dad6ff', '#b4adff', '#685bfb', '#1f148f'],
    success: ['#9ad09c', '#49a24c', '#0f8613', '#008504'],
    warning: ['#db9e43', '#b86e00', '#b86e00', '#804d00'],
    danger: ['#ff9ea3', '#ff525a', '#d0111a', '#8e0108'],
  }

  const ratios = {
    '050': 1.05,
    '100': 1.23,
    '200': 1.63,
    '300': 2.25,
    '400': 3.01,
    '500': 4.13,
    '600': 5.07,
    '700': 6.31,
    '800': 8.21,
    '900': 11.3,
  }

  const colorScales: ColorScalesType = Object.keys(colorKeys).map(
    (scaleName) => {
      return {
        name: scaleName,
        colorKeys: colorKeys[scaleName as keyof ScalesSrcType],
        colorspace: 'CAM02',
        ratios: Object.keys(ratios).reduce(
          (newRatios, ratioKey) => ({
            ...newRatios,
            [`--color-${scaleName}-${ratioKey}`]: ratios[
              ratioKey as keyof typeof ratios
            ],
          }),
          {}
        ),
      }
    }
  )

  useEffect(() => {
    console.log('rendered')
    const makeTheme = generateAdaptiveTheme({ baseScale: 'grey', colorScales })
    const theme = makeTheme(brightness, contrast)

    if (Array.isArray(theme)) {
      type ColorScaleType = {
        name: string
        values: {
          name: string
          contrast: number
          value: string
        }[]
      }

      const bgColorDeclaration =
        '--color-background:' +
        theme
          .map((x) => {
            if ((x as { background: string }).background !== undefined) {
              return (x as { background: string }).background
            } else {
              return ''
            }
          })
          .join('') +
        ';'

      const colorDeclarations = theme
        .map((scale) => {
          if ((scale as ColorScaleType).values) {
            const scaleDeclarations = (scale as ColorScaleType).values
              .sort((x, y) => (Object.keys(x)[0] > Object.keys(y)[0] ? 1 : -1))
              .map((value) => {
                return value.name + ':' + value.value + ';'
              })
            return scaleDeclarations
          }
          return ''
        })
        .flat()
        .filter((x) => x !== '')

      const style = document.createElement('style')
      style.id = 'color-tokens'
      style.textContent = `:root {${
        bgColorDeclaration + colorDeclarations.join('')
      }}`
      document.head.append(style)
    }
  }, [colorScales, brightness, contrast])

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

  const handleChangeContrast = (e: ChangeEvent<HTMLInputElement>) => {
    setContrast(+e.target.value)
  }
  const handleChangeBrightness = (e: ChangeEvent<HTMLInputElement>) => {
    setBrightness(+e.target.value)
  }

  return (
    <div className="AdaptiveThemeManager">
      <label className="AdaptiveThemeManager__control">
        <span>Contrast: {contrast}</span>
        <input
          type="range"
          value={contrast}
          step={0.1}
          min={1}
          max={5}
          onChange={handleChangeContrast}
        />
      </label>

      <label className="AdaptiveThemeManager__control">
        <span>Brightness: {brightness}</span>
        <input
          step={1}
          min={0}
          max={100}
          type="range"
          value={brightness}
          onChange={handleChangeBrightness}
        />
      </label>
    </div>
  )
}
