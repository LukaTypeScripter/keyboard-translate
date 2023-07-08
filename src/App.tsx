import { useEffect, useState } from 'react'
import Header from './components/Header'
import Main from './components/Main'
import axios from 'axios';
import { Word } from './components/interfaces/interface';
//
function App() {
  const [isChecked, setIsChecked] = useState(false)
  const [word,setWord] = useState('')
  const [wordData,setWordData] = useState<Word[]>([])
  const [loading,setloading] = useState(false)
  const toggleChecked = () => {
    setIsChecked(!isChecked)
  }
  let dark = isChecked ? 'dark:bg-blackvariant1 ' : '';
  let color = isChecked ? 'dark:text-white' : '';
  

useEffect(() => {
  setloading(true)
  axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/bad`)
  .then(response => {
    setWordData(response.data)
    setloading(false)
  })
  .catch(error => {
    console.error(error);
  });
},[])
console.log(wordData)
  return (
    <div className={`relative z-0 ${dark} ${color} `}>
      <Header toggleChecked={toggleChecked} isChecked={isChecked} setWord={setWord}/>
      {wordData.length > 0 && <Main wordData={wordData[0]} />}
      {loading && (<>weeee</>)}

    </div>
  )
}

export default App
