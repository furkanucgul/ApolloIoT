import { CircularProgress } from '@mui/material'
import React from 'react'

const LoadingPage = () => {
  return (
    <div className='w-screen h-screen flex justify-center items-center gap-3 text-lg font-semibold'>
      <CircularProgress size={40} />
      Yükleniyor...
    </div>
  )
}

export default LoadingPage