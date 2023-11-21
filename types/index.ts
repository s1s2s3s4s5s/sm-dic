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
  searchParams: string
}

export interface Words {
  title: string
}

export interface WordProps {
  title: string 
  words: Words[]
}

export interface SearchProps {
  word: string
  setWord: (word: string) => void
}