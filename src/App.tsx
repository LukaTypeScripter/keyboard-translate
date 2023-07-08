import { useEffect, useState } from 'react'
import Header from './components/Header'
import Main from './components/Main'
import axios from 'axios';
import { Word } from './components/interfaces/interface';
//
function App() {
  const [isChecked, setIsChecked] = useState(false)
  const [word,setWord] = useState('keyboard')
  const [wordData,setWordData] = useState<Word[]>([])
  const [loading,setloading] = useState(false)
  const [activeItem, setActiveItem] = useState('Sans Serif');
  const toggleChecked = () => {
    setIsChecked(!isChecked)
  }
  let dark = isChecked ? 'dark:bg-blackvariant1 ' : '';
  let color = isChecked ? 'dark:text-white' : '';
  

  useEffect(() => {
    setloading(true);
    if (word !== '') {
      axios
        .get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
        .then((response) => {
          setWordData(response.data);
          setloading(false);
        })
        .catch((error) => {
          console.error(error);
          setloading(false);
        });
    } else {
      setWordData([]);
      setloading(false);
    }
  }, [word]);
const fontSans = activeItem === "Sans Serif" && 'font-sans' 
const fontSerif = activeItem === "Serif" && "font-serif"
const fontMono = activeItem === "Mono" && "font-mono"
console.log(wordData)
  return (
    <div className={`relative z-0 ${dark} ${color} ${fontSans} ${fontSerif} ${fontMono}`} >
      <Header toggleChecked={toggleChecked} isChecked={isChecked} setWord={setWord} activeItem={activeItem} setActiveItem={setActiveItem} />
      <Main wordData={wordData} />
      {loading && (<>weeee</>)}

    </div>
  )
}

export default App
