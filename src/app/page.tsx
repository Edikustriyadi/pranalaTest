'use client';
import { FormEvent, useState } from "react"
import Input from "@/components/Input"
import axios from 'axios';

export default function Home() {
  const [number, setNumber] = useState<number>(0)
  const [isNumber, setIsNumber] = useState<boolean>(false)
  const [resultSegitiga, setResultSegitiga] = useState([]);
  const [resultGanjil, setResultGanjil] = useState([]);

  const handleChange = (e: FormEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    const reg = new RegExp('^[0-9]+$');
    if (!reg.test(value)) {
      alert('Input angka harus berupa angka')
      setIsNumber(true)
    } else {
      setNumber(Number(value))
      setIsNumber(false)
    }

  }

  const onHandle = async (e: FormEvent<HTMLButtonElement>, name: string) => {
    e.preventDefault();
    const baseUrl = 'http://localhost:3000/api';

    switch (name) {
      case 'segitiga':
        const responseSegitiga = await axios.get(`${baseUrl}/`, {
          params: {
            number,
            name
          }
        });
        setResultSegitiga(responseSegitiga.data);
        break;
      case 'ganjil':
        const responseGanjil = await axios.get(`${baseUrl}/`, {
          params: {
            number,
            name
          }
        });
        setResultGanjil(responseGanjil.data);
        break;
      case 'prima':
        alert('prisma')
        break;
      default:
        break;
    }
  }
  return (
    <>
      <div>
        <Input onChange={(e) => handleChange(e)} />
        <div className="flex gap-4 mt-4">
          <button type="button" disabled={isNumber ? true : false} onClick={(e) => onHandle(e, 'segitiga')} className="border border-blue-300 p-2 rounded-md shadow-md bg-blue-500 text-white">Generare Segitiga</button>
          <button type="button" disabled={isNumber ? true : false} onClick={(e) => onHandle(e, 'ganjil')} className="border border-blue-300 p-2 rounded-md shadow-md bg-blue-500 text-white">Generare bilangan ganjil</button>
          <button type="button" disabled={isNumber ? true : false} onClick={(e) => onHandle(e, 'prima')} className="border border-blue-300 p-2 rounded-md shadow-md bg-blue-500 text-white">Generare bilangan prima</button>
        </div>
        <div className="mt-4">
          <h1 >Result : </h1>
          <ul>
            {resultSegitiga && resultSegitiga.map((item: number, index: number) => (
              <li key={index}>
                {item}
              </li>
            ))}
          </ul>
          <ul>
            {resultGanjil && resultGanjil.map((item: number, index: number) => (
              <li key={index}>
                {item}
              </li>
            ))}
          </ul>
        </div>

      </div>
    </ >
  )
}
