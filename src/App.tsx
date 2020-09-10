import React from 'react'
import './App.scss'
import {
  //ContrastColorsManager,
  AdaptiveThemeManager,
} from './components'
import { ColorSamples } from 'components/ColorSamples'

function App() {
  return (
    <div className="App">
      {/* <ContrastColorsManager /> */}
      <AdaptiveThemeManager />
      <ColorSamples />
    </div>
  )
}

export default App
