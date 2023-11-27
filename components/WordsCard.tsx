import React from 'react'
import { WordCardProps } from '@/types';

interface CardProps{
    allwords: WordCardProps
}

const WordsCard = ({ allwords }: CardProps) => {
    return (
        <div className='w-full flex flex-1 justify-center items-center p-20 border-grey-100' >
			<div className='bg-primary-blue-100 flex-center flex-col ' >
				{allwords?.synonyms.map((item) => (
                    <div className='flex flex-col justify-center items-center' >
                        <span className='text-normal font-medium text-black-100' >{item}</span>
                    </div>
                ))}
			</div>
			<div className='bg-primary-blue-100 flex-center flex-col ' >
				{allwords?.antonyms.map((word: string) => (
                    <div className='flex flex-col justify-center items-center' >
                        <p className='text-normal font-medium text-black-100' >{word}</p>
                    </div>
                ))}
			</div> 
		</div>
    )
}

export default WordsCard
