import './App.css'
import ChildComponent from './Child'
import UpdBtn from './UpdBtn'
import ThemeContext from './contexts/ThemeContext'
import { useState } from 'react'

const App = () => {
  const [theme, setTheme] = useState('light')
  return (
    <ThemeContext.Provider value={{theme, text: 'white'}}>
      <ChildComponent />
      <UpdBtn setValue={setTheme} />
    </ThemeContext.Provider>
  )
}

export default App
