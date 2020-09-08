import React from 'react'
import './ColorSwatch.scss'

export const ColorSwatch = ({ color }: { color: string }) => {
  return <div className="ColorSwatch" style={{ backgroundColor: color }}></div>
}
