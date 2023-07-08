import React, { Fragment, useEffect, useRef } from 'react';
import { newWindow } from '../assets';
import { MainProps } from './interfaces/interface';

function Main({ wordData }: MainProps) {
  const heading = 'no-underline font-bold text-2xl leading-5';
{/**TODO:fix the error about sounds */}
  // Create a reference to the audio element

  // Create a reference to the audio element
  const audioRefs = useRef<Array<HTMLAudioElement | null>>([]);

  // Function to play the audio
  const playAudio = (index: number) => {
    audioRefs.current[index]?.play();
    console.log(index)
  };

  // Create a set to store unique words
  const uniqueWords = new Set();

  // Filter out duplicate words
  const filteredData = wordData.filter((data) => {
    if (uniqueWords.has(data.word)) {
      return false;
    } else {
      uniqueWords.add(data.word);
      return true;
    }
  });

  // Reset audioRefs when performing a new search
  useEffect(() => {
    audioRefs.current = [];
  }, [wordData]);
  return (
    <main className='ps-5 pe-5 max-w-4xl pt-6 ms-auto me-auto'>
      {filteredData.map((data, index) => (
        <Fragment key={index}>
          <section className='flex justify-between items-center'>
            <div className='flex-col'>
              <h1 className={`text-5xl font-bold` }>{data.word}</h1>
              <p className='text-purple'>{data.phonetic}</p>
            </div>
            <figure className='col-span-2/3 row-span-full'>
              {data.phonetics.length > 0 && (
                <Fragment>
                  <audio ref={(ref) => (audioRefs.current[index] = ref)} controls>
                    {data.phonetics.map((phonetic, phoneticIndex) => (
                      <source key={phoneticIndex} src={phonetic.audio} type='audio/mpeg' />
                    ))}
                  </audio>
                  <button onClick={() => playAudio(index)}>
                    <svg xmlns='http://www.w3.org/2000/svg' width='75' height='75' viewBox='0 0 75 75'>
                      <g fill='#A445ED' fill-rule='evenodd'>
                        <circle cx='37.5' cy='37.5' r='37.5' opacity='.25' />
                        <path d='M29 27v21l21-10.5z' />
                      </g>
                    </svg>
                  </button>
                </Fragment>
              )}
            </figure>
          </section>
          {data.meanings.map((meaning, index) => (
            <section key={index}>
              <div className='flex flex-row gap-8 mt-8 items-center'>
                <h2 className={`${heading}`}>{meaning.partOfSpeech}</h2>
                <span className='w-full h-[1px] items-center bg-[#3b3b3b]'></span>
              </div>
              <h3 className='mt-8 text-xl'>Meaning</h3>
              <ul className='list-none list-custom-purple mt-4 pl-4'>
  {meaning.definitions.map((definition, index) => (
    <li
      key={index}
      className='relative pl-6 py-1'
    >
      <span className='before:absolute before:inset-0 before:w-2 before:h-2 before:bg-purple before:rounded-full before:left-0 before:top-[9px]'></span>
      {definition.definition}
    </li>
  ))}
</ul>
              <div>
                {meaning.synonyms.length > 0 && (
                  <div>
                    <h4 className='mt-6 pt-6 border-t border-[#3b3b3b] text-gray-500 text-lg'>Synonyms</h4>
                    <ul className='flex flex-wrap list-none mt-2 pl-0 text-purple gap-3'>
                      {meaning.synonyms.map((synonym, index) => (
                        <li key={index} className='inline'>{synonym},</li>
                      ))}
                    </ul>
                  </div>
                )}
                {meaning.antonyms.length > 0 && (
                  <div>
                    <h4 className='mt-6 pt-6 border-t border-[#3b3b3b] text-gray-500 text-lg '>Antonyms</h4>
                    <ul className='flex flex-wrap list-none mt-2 pl-0 text-purple gap-3'>
                      {meaning.antonyms.map((antonym, index) => (
                        <li key={index} className='inline'>{antonym},</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </section>
          ))}
          {data.sourceUrls.length > 0 && (
            <section>
              <h4 className='mt-6 pt-6 border-t border-[#3b3b3b]'>Source</h4>
              <ul className='list-none mt-2 pl-0'>
                {data.sourceUrls.map((url, index) => (
                  <li key={index}>
                    <a className='flex gap-3 items-center' target='_blank' href={url}>
                      <span>{url}</span>
                      <img src={newWindow} alt='win' className='h-[14px] w-[14px]' />
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </Fragment>
      ))}
    </main>
  );
}

export default Main;
