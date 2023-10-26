import React, { FormEvent } from 'react'

type AppProps = {
  onChange: (e: FormEvent<HTMLInputElement>) => void,
}
export default function Input({ onChange }: AppProps) {
  return (
    <>
      <input type="text" onChange={onChange} placeholder="Input angka" className="border border-black p-2" />
    </>
  )
}
