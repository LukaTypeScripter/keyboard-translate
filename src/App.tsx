import { useState } from 'react'
import Header from './components/Header'

//https://api.dictionaryapi.dev/api/v2/entries/en/
function App() {
  const [isChecked, setIsChecked] = useState(false)
  const toggleChecked = () => {
    setIsChecked(!isChecked)
  }
  let dark = isChecked ? 'dark:bg-blackvariant1 ' : '';
  let color = isChecked ? 'dark:text-white' : ''
  return (
    <div className={`relative z-0 ${dark} ${color} `}>
      <Header toggleChecked={toggleChecked} isChecked={isChecked}/>
    </div>
  )
}

export default App
