import React from 'react'
import banner from '../assets/Desconto-progressivo-1.jpeg'

function TopAnuncio() {
  return (
    <div className='mx-36 my-8 text-center'>
      <h3 className='font-poppins text-3xl'>ESTILO QUE INSPIRA CONFIANÇA. ELEGÂNCIA QUE DEFINE QUEM VOCÊ É.</h3>
      <img src={banner} alt="banner desconto" className='w-full h-full mt-4 object-cover'/>
    </div>
  )
}

export default TopAnuncio
