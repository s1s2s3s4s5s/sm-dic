import React from 'react'
import { DefCardProps } from '@/types';

interface CardProps {
	wordDef: DefCardProps
}

const DefCard = ({ wordDef }: CardProps) => {
	return (
		<div className='w-full flex flex-1 justify-center items-center p-20 border-grey-100' >
			<div className='bg-primary-blue-100 flex-center flex-col ' >
				<p className='text-normal font-medium text-black-100' >{wordDef?.definition}</p>
			</div>
		</div>
	)
}

export default DefCard
