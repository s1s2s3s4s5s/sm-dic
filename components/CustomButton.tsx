"use client"

import { CustomButtonProps } from '@/types'
import React from 'react'

const CustomButton = ({ title, btnType, containerStyles, handleClick, textStyle, rightIcon }: CustomButtonProps) => {
  return (
    <button
      type={btnType}
      onClick={handleClick}
      className={`custom-btn ${containerStyles}`}
    >
      <span className={`flex-1 ${textStyle}`} >{ title }</span>
      {rightIcon && (
        <div className='relative w-6 h-6' >
          {rightIcon}
        </div>
      )}
    </button>
  )
}

export default CustomButton