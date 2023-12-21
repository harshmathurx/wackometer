import { Inter } from 'next/font/google'
import { useEffect, useState } from 'react'
import { rank } from '@/utils/wackometer'
import { Ranking } from '@/components/Ranking'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [inputText, setInputText] = useState("")
  const [ranking, setRanking] = useState({
    score: 0,
    validations: [],
  })

  useEffect(() => {
    const newRank = rank(inputText);
    setRanking(newRank)
    // console.log()
  }, [inputText])

  return (
    <main
      className={`flex gap-y-10 flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <h1 className='text-3xl font-bold'>Wackometer</h1>
      <div className='flex flex-col text-center'>
        <label htmlFor="input">Please enter the text here</label>
        <input className='border-gray-500 border-2 p-2 rounded-md' id='input' onChange={(e) => {
          e.preventDefault()
          setInputText(e.target.value)
        }} />
      </div>
      <p>{JSON.stringify(ranking)}</p>
      <Ranking ranking={ranking} />
    </main>
  )
}
