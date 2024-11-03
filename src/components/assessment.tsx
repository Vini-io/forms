"use client"
import '@/styles/assessment.css'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { typeAvaliacao } from '@/types/typeAvaliacao'

export default function Assessment() {

    type typeArrayAvaliacao = typeAvaliacao[];



    const [formOBJ, setFormOBJ] = useState<typeAvaliacao>({
        setor: '',
        unidade: '',
        nome: '',
        telefone: '',
        cpf: '',
        email: '',
        ano: false,
        star: 5,
        description: ''
    });

    useEffect(() => {
        console.log(formOBJ)
    }, [formOBJ])


    const [activeStars, setActiveStars] = useState(5)
    const handleStar = (starValue: number) => {

        setFormOBJ(prev => ({ ...prev, star: starValue }));

        setActiveStars(starValue)
    }

    const handleDescription = (description: string) => {
        formOBJ.description = description;
    }

    const sendAssess = () => {

        const getForm: string = localStorage.getItem("formTemp") || ""
        if (getForm) {

            const formTemp: typeAvaliacao = JSON.parse(getForm)

            if (!formTemp.ano) {
                //não é anonimo
                formOBJ.setor = formTemp.setor;
                formOBJ.unidade = formTemp.unidade;
                formOBJ.nome = formTemp.nome;
                formOBJ.cpf = formTemp.cpf;
                formOBJ.email = formTemp.email;

            } else {

                formOBJ.nome = formTemp.nome
                formOBJ.ano = formTemp.ano
            }
        } else {
            console.log("Não existe formTemp")
        }

        const GetlistAvalicao: string = localStorage.getItem("listAvalicao") || ""

        if (GetlistAvalicao) {

            const listAvalicao: typeArrayAvaliacao = JSON.parse(GetlistAvalicao)
            listAvalicao.push(formOBJ)
            localStorage.setItem("listAvalicao", JSON.stringify(listAvalicao))
        } else {
            const listAvalicao: typeArrayAvaliacao = []
            listAvalicao.push(formOBJ)
            localStorage.setItem("listAvalicao", JSON.stringify(listAvalicao))
        }
        localStorage.removeItem("formTemp");
    }

    return (
        <div className="w-96 h-3/4 rounded-xl bg-white flex items-center flex-col mx-3">
            <span className='font-bold text-2xl mt-12 mb-8'>Feedback</span>
            <div className='w-3/4 flex justify-evenly'>
                {[...Array(5)].map((_, index) => (
                    <Image
                        key={index}
                        width={30}
                        height={30}
                        onClick={() => handleStar(index + 1)}
                        className="w-10 h-10 stars start_1"
                        src={index < activeStars ? "/star_active.png" : "/star.png"}// PODE SER <=
                        alt="star 1" />
                ))}
            </div>
            <div className='w-3/4 mt-5'>
                <span className=' text-sm text-gray-600'>Conte mais sobre sua experiência:</span>
            </div>
            <textarea maxLength={300} onChange={(e) => handleDescription(e.target.value)} className='border-2 w-3/4' rows={8}></textarea>
            <Link href='/formulario/avaliacao/sucesso'>
                <button onClick={sendAssess} className='hover:bg-blue-700 font-bold bg-blue-500 text-white px-9 py-3 rounded-lg mt-8'>Enviar</button>
            </Link>
        </div>
    )
}