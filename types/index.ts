import React, { MouseEventHandler } from "react"

export interface CustomButtonProps {
  title: string
  btnType: "button" | "submit"
  containerStyles?: string
  handleClick?: MouseEventHandler<HTMLButtonElement>
  textStyle?: string 
  rightIcon?: React.ReactNode
}

export interface HomeProps {
  searchParams: Words
}

export interface Words {
  word: string
}

export interface WordProps {
  title: string 
  words: Words[]
}

export interface SearchProps {
  word: string
  setWord: (word: string) => void
}

export interface DefCardProps {
  definition: string
  word: string
  valid: boolean
}

interface Word {
  [key: number]: string
} 

export interface WordCardProps {
  word: string
  synonyms: Word[]
  antonyms: Word[]
}

export interface QuoteProps {
  quote: string
  author: string
  category: string
}