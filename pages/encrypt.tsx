import React from 'react'
import Header from '../components/Header'
import ResultText from '../components/ResultText'
import TextField from '../components/TextField'

export default function Encrypt() {

  return (
    <>
      <Header />
      <section>
        <TextField label='Informe seu texto aqui' id='textEncrypt' />
      
        <ResultText result='Resultado:' id='textResult' />
      </section>
    </>
  )
}