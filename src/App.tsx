import { useEffect, useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import axios from "axios";
import { Word } from "./components/interfaces/interface";
import Loader from "./components/Loader";

function App() {
  const [isChecked, setIsChecked] = useState(false);
  const [word, setWord] = useState("keyboard");
  const [wordData, setWordData] = useState<Word[]>([]);
  const [loading, setLoading] = useState(false);
  const [activeItem, setActiveItem] = useState("Sans Serif");
  const [error, setError] = useState(false);

  const toggleChecked = () => {
    setIsChecked((prevChecked) => {
      const newChecked = !prevChecked;
      localStorage.setItem("isChecked", JSON.stringify(newChecked));
      return newChecked;
    });
  };

  let dark = isChecked ? "dark:bg-blackvariant1 " : "";
  let color = isChecked ? "dark:text-white" : "";

  useEffect(() => {
    setLoading(true);
    if (word !== "") {
      axios
        .get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
        .then((response) => {
          setWordData(response.data);
          setLoading(false);
          setError(false);
          localStorage.setItem("wordData", JSON.stringify(response.data));
        })
        .catch((error) => {
          console.error(error);
          setLoading(false);
          setError(true);
          localStorage.removeItem("wordData");
        });
    } else {
      setWordData([]);
      setLoading(false);
    }
  }, [word]);

  const fontSans = activeItem === "Sans Serif" && "font-sans";
  const fontSerif = activeItem === "Serif" && "font-serif";
  const fontMono = activeItem === "Mono" && "font-mono";

  useEffect(() => {
    const savedWordData = localStorage.getItem("wordData");
    if (savedWordData) {
      setWordData(JSON.parse(savedWordData));
    }
  }, []);

  useEffect(() => {
    const savedChecked = localStorage.getItem("isChecked");
    if (savedChecked !== null) {
      setIsChecked(JSON.parse(savedChecked));
    }
  }, []);

  return (
    <div
      className={`relative z-0 ${dark} ${color} ${fontSans} ${fontSerif} ${fontMono} `}
    >
      <Header
        toggleChecked={toggleChecked}
        isChecked={isChecked}
        setWord={setWord}
        activeItem={activeItem}
        setActiveItem={setActiveItem}
      />
      {error ? (
        <main className=" mt-20 text-center h-screen">
          <div className="text-heading-l">😕</div>
          <h5 className="font-bold mt-5 tablet:mt-11">No Definitions Found</h5>
          <p className="mt-3 tablet:mt-6">
            Sorry pal, we couldn't find definitions for the word you were
            looking for. You can try the search again at a later time or head
            to the web instead.
          </p>
        </main>
      ) : (
        <Main wordData={wordData} />
      )}

      {loading && <Loader />}
    </div>
  );
}

export default App;
