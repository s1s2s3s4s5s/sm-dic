
import { Thesaurus, Dictionary, RandomQuote } from '@/utils'
import { HomeProps } from '@/types'
import { Searchbar, DefCard, WordsCard, QuoteCard } from '@/components'

const page = async ({ searchParams }: HomeProps) => {
  const wordDef = await Dictionary({ word: searchParams.word || '' }) 
  const allWords = await Thesaurus({ word: searchParams.word || '' })
  const quote = await RandomQuote()

  const isDataEmpty = !Array.isArray(allWords) || allWords.length <1 || !allWords
  
  return (
    <main className='overflow-hidden' >
      <div className="mt-12 padding-x padding-y max-width" id="discover" >
        <div className="home__text-container" >
          <h1 className="text-4xl font-extrabold" > Word Catalogue </h1>
          <p>Explore the word you might like</p>
        </div>
        <div className="w-full flex flex-1 justify-center items-start mx-5" >
          <Searchbar />
        </div>
        <div>
          <div>
            <DefCard
              wordDef={wordDef}
            />
          </div>
          <div>
            {/* {!isDataEmpty ? (
              <section>
                <div className='home__wrapper' >
                  <WordsCard
                    allwords={allWords}
                  />
                </div>
              </section>
            ) : (
              <div className="home__error-container" >
                <h2 className="text-black text-xl font-bold" >Oops, no results</h2>
              </div>
            )} */}
          </div>
          <div>
            <QuoteCard
              quote={quote}
            />
          </div>
        </div>
      </div>
    </main>
  )
}

export default page