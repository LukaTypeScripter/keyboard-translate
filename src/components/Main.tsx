import React, { Fragment, useRef } from 'react'
import { newWindow } from '../assets'
import { MainProps } from './interfaces/interface'
//https://api.dictionaryapi.dev/media/pronunciations/en/bad-uk.mp3
function Main({wordData}:MainProps) {
    const heading = 'no-underline  font-bold text-2xl leading-5'
    const { word, phonetic, meanings, sourceUrls, } = wordData;
    const verbMeanings = meanings.filter((meaning) => meaning.partOfSpeech.toLowerCase() === 'verb');

  // Create a reference to the audio element
  const audioRef = useRef<HTMLAudioElement>(null);

  // Function to play the audio
  const playAudio = () => {
    audioRef.current?.play();
  };

    return (
    <main
    className='ps-5 pe-5 max-w-4xl pt-6 ms-auto me-auto w-full'
    >
        <section>
       <section className='flex justify-between items-center'>
        <div className='flex-col'>
        <h1 className={`${heading}`}>{word}</h1>
        <p className='text-purple'>{phonetic}</p>
        </div>
        <figure className='col-span-2/3 row-span-full'>
          <audio ref={audioRef} controls className='hidden'>
            <source src={wordData.phonetics[0].audio || wordData.phonetics[1].audio} type='audio/mpeg' />
          </audio>
          <button onClick={playAudio}>
            <svg xmlns='http://www.w3.org/2000/svg' width='75' height='75' viewBox='0 0 75 75'>
              <g fill='#A445ED' fill-rule='evenodd'>
                <circle cx='37.5' cy='37.5' r='37.5' opacity='.25' />
                <path d='M29 27v21l21-10.5z' />
              </g>
            </svg>
          </button>
          <a href={wordData.phonetics[0].sourceUrl} target='_blank' rel='noopener noreferrer' className='hidden'>
            Listen on Wikimedia Commons
          </a>
        </figure>
       </section>
      {/**TODO:add errors */}
        <section >
            <div className='flex flex-row gap-8 mt-8 items-center'>
                <h2 className={`${heading}`}>noun</h2>
                <span className='w-full h-[1px] items-center bg-[#3b3b3b]'></span>
            </div>
        </section>
        <section>
        <section>
        <h3 className='mt-8 text-xl'>Meaning</h3>
        {wordData.meanings.map((meaning, index) => (
          <div key={index} className='mt-4 pl-4 '>
            <h4 className='font-bold'>{meaning.partOfSpeech}</h4>
            <ul>
              {meaning.definitions.map((definition, i) => (
                <li key={i} >{definition.definition}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {meanings.map((meaning, index) => (
        <Fragment key={index}>
          {meaning.synonyms && meaning.synonyms.length > 0 && (
            <div className='inline  '>
              <h2 className='text-bold text-xl inline-block mr-8 pt-8'>Synonyms</h2>
              <ul className='inline text-purple pl-0 pt-4 '>
                {meaning.synonyms.map((synonym, i) => (
                  <li className='inline' key={i} >{synonym},</li>
                ))}
              </ul>
            </div>
          )}

          {meaning.antonyms && meaning.antonyms.length > 0 && (
              <div className='inline  '>
              <h2 className='text-bold text-xl inline-block mr-8 pt-8'>Synonyms</h2>
              <ul className='inline text-purple pl-0 pt-4 '>
                {meaning.antonyms.map((ant, i) => (
                  <li className='inline' key={i} >{ant},</li>
                ))}
              </ul>
            </div>
          )}
        </Fragment>
      ))}
        <h4 className='mt-6 pt-6 border-t border-[#3b3b3b]'>source</h4>
        <ul className='list-none mt-2 pl-0'><li><a className='flex gap-3 items-center' target='_blank' href={wordData.sourceUrls[0]}>
                <span>{wordData.sourceUrls[0]}</span>
                <img src={newWindow} alt="win" className='h-[14px] w-[14px]' />
            </a></li></ul>
        </section>
        <section >
            <div className='flex flex-row gap-8 mt-8 items-center'>
                <h2 className={`${heading}`}>Verb</h2>
                <span className='w-full h-[1px] items-center bg-[#3b3b3b]'></span>
            </div>
        </section>
        <section>
        <h3 className='mt-8'>Meaning</h3>
        <ul className='pl-4 mt-4'>
          {verbMeanings.map((meaning, index) => (
            <li key={index}>
              <h4 className='font-bold'>{meaning.partOfSpeech}</h4>
              <ul>
                {meaning.definitions.map((definition, i) => (
                  <li key={i}>{definition.definition}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </section>
        <h4 className='mt-6 pt-6 border-t border-[#3b3b3b]'>source</h4>
        <ul className='list-none mt-2 pl-0'><li><a className='flex gap-3 items-center' target='_blank' href={wordData.sourceUrls[0]}>
                <span>{wordData.sourceUrls[0]}</span>
                <img src={newWindow} alt="win" className='h-[14px] w-[14px]' />
            </a></li></ul>
            <section >
            <div className='flex flex-row gap-8 mt-8 items-center'>
                <h2 className={`${heading}`}>noun</h2>
                <span className='w-full h-[1px] items-center bg-[#3b3b3b]'></span>
                
            </div>
        </section>
        <h3 className='mt-8'>Meaning</h3>
            <ul className='pl-4 mt-4'>
                <li>
                    <p className='font-normal no-underline  text-sm leading-6'>wedawd</p>
                    <p className='font-normal no-underline  text-sm leading-6 mt-2 text-[#757575]'>awdawd</p>
                </li>
                </ul>
        <h4 className='mt-6 pt-6 border-t border-[#3b3b3b]'>source</h4>
        <ul className='list-none mt-2 pl-0'><li><a className='flex gap-3 items-center' target='_blank'>
                <span>{wordData.sourceUrls[0]}</span>
                <img src={newWindow} alt="win" className='h-[14px] w-[14px]' />
            </a></li></ul>
            </section>
    </main>
  )
}

export default Main