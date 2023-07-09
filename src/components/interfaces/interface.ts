

export interface HeaderProps {
    isChecked: boolean;
    toggleChecked: () => void
    setWord:React.Dispatch<React.SetStateAction<string>>
    activeItem:string
    setActiveItem:React.Dispatch<React.SetStateAction<string>>
}

export interface SmallModals {
    showSmallModal: boolean
    isChecked: boolean
    activeItem:string
    setActiveItem:React.Dispatch<React.SetStateAction<string>>
    setShowSmallModal:React.Dispatch<React.SetStateAction<boolean>>
}

export interface SearchProps {
    isChecked: boolean
    setWord:React.Dispatch<React.SetStateAction<string>>
}


export interface Word {
    word: string;
    phonetic: string;
    phonetics: Phonetic[];
    meanings: Meaning[];
    synonyms: string[];
    antonyms: string[];
    license: License;
    sourceUrls: string[];
  }
  
  interface Phonetic {
    text: string;
    audio: string;
    sourceUrl: string;
    license: {
      name: string;
      url: string;
    };
  }
  
  interface Definition {
    definition: string;
    synonyms: string[];
    antonyms: string[];
  }
  
  interface Meaning {
    partOfSpeech: string;
    definitions: Definition[]; // Include definitions property here
    synonyms: string[];
    antonyms: string[];
  }
  
  interface License {
    name: string;
    url: string;
  }
  export interface MainProps {
    wordData:Word[]
  }

