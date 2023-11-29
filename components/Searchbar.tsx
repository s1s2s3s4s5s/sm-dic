"use client"

import React, { useState } from "react"
import { useRouter } from "next/navigation"
import { Search } from "lucide-react"

const SearchButton = ({ othersClasses }: { othersClasses: string }) => (
  <button type="submit" className={`-ml-3 z-10 ${othersClasses}`} >
    <Search size={16} />
  </button>
)


const Searchbar = () => {
  const [word, setWord] = useState('')
  const router = useRouter()

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if(word === ''){
      return alert('Please fill in the search bar')
    }

    updateSearchParams(word.toLowerCase())
  }

const updateSearchParams = (word: string,) => {
  const searchParams = new URLSearchParams(window.location.search)

  if (word) {
    searchParams.set('word', word)
  } else {
    searchParams.delete('word')
  }

  const newPathName = `${window.location.pathname}?${searchParams.toString()}`

  router.push(newPathName)
}

  return (
    <form className="searchbar" onSubmit={handleSearch} >
      <div className="searchbar__item" >
      </div>
      <div className="searchbar__item" >
        <input
          type="text"
          name="model"
          value={word}
          onChange={(e) => setWord(e.target.value)}
          placeholder="Bright"
          className="searchbar__input"
        />
        <SearchButton
          othersClasses="sm:hidden"
        />
      </div>
      <SearchButton
          othersClasses="max-sm:hidden"
      />
    </form>
  )
}

export default Searchbar