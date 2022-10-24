import React, {useState} from 'react'
import ButtonSubmit from '../components/ButtonSubmit';
import Header from '../components/Header'
import ResultText from '../components/ResultText'
import {
  LockClosedIcon,
} from '@heroicons/react/24/outline'

export default function Encrypt() {
  const [changeText, setChangeText] = useState('');

  function handleOnChange(e: any){    
    setChangeText(e.target.value);
  }

  return (
    <>
      <Header />
      
      <form action={'/api/hello?text=' + changeText} method='post'>
        <div className='m-10 w-auto h-max'>
          <textarea placeholder='Informe seu texto aqui' className='w-full h-[150px] rounded-xl bg-white border-2 border-stone-800 text-black pl-[10px] overflow-auto' id='textEncrypt' onChange={handleOnChange} value={changeText} />
        </div>
      
        <ResultText result='Resultado:' id='textResult' />

        <ButtonSubmit>
          <LockClosedIcon width={50} height={50} className='mr-[10px]' />
          Criptografar
        </ButtonSubmit>
      </form>
    </>
  )
}