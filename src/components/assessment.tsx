"use client"
import '@/styles/assessment.css'
import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function Assessment() {

    const [form, setForm] = useState([])
    const formOBJ: any = {
        setor: '',
        unidade: '',
        nome: '',
        telefone: '',
        cpf: '',
        email: '',
        ano: false,
        star: 5,
        description: ''
    }


    const handleStar = (starValue: number) => {
        formOBJ.star = starValue

        if (starValue == 1) {
            document.querySelector(".start_1").src = "/star_active.png"
            document.querySelector(".start_2").src = "/star.png"
            document.querySelector(".start_3").src = "/star.png"
            document.querySelector(".start_4").src = "/star.png"
            document.querySelector(".start_5").src = "/star.png"
        } else if (starValue == 2) {
            document.querySelector(".start_1").src = "/star_active.png"
            document.querySelector(".start_2").src = "/star_active.png"
            document.querySelector(".start_3").src = "/star.png"
            document.querySelector(".start_4").src = "/star.png"
            document.querySelector(".start_5").src = "/star.png"
        } else if (starValue == 3) {
            document.querySelector(".start_1").src = "/star_active.png"
            document.querySelector(".start_2").src = "/star_active.png"
            document.querySelector(".start_3").src = "/star_active.png"
            document.querySelector(".start_4").src = "/star.png"
            document.querySelector(".start_5").src = "/star.png"
        } else if (starValue == 4) {
            document.querySelector(".start_1").src = "/star_active.png"
            document.querySelector(".start_2").src = "/star_active.png"
            document.querySelector(".start_3").src = "/star_active.png"
            document.querySelector(".start_4").src = "/star_active.png"
            document.querySelector(".start_5").src = "/star.png"
        } else {
            document.querySelector(".start_1").src = "/star_active.png"
            document.querySelector(".start_2").src = "/star_active.png"
            document.querySelector(".start_3").src = "/star_active.png"
            document.querySelector(".start_4").src = "/star_active.png"
            document.querySelector(".start_5").src = "/star_active.png"
        }
    }

    const handleDescription = (description: string) => {
        formOBJ.description = description
    }

    const sendAssess = () => {

        let formTemp: any = localStorage.getItem("formTemp")
        formTemp = JSON.parse(formTemp)

            // console.log(formTemp)

        if (!formTemp.ano) {
            //não é anonimo
            formOBJ.setor = formTemp.setor;
            formOBJ.unidade = formTemp.unidade;
            formOBJ.nome = formTemp.nome;
            formOBJ.cpf = formTemp.cpf;
            formOBJ.email = formTemp.email;
            //console.log("n ano")
        }else{
            console.log("entrou:", formTemp)
            formOBJ.nome = formTemp.nome
            formOBJ.ano = formTemp.ano
        }

        let listAvalicao: any = localStorage.getItem("listAvalicao")
        listAvalicao = JSON.parse(listAvalicao)
        if (!listAvalicao) {
            listAvalicao = []
            listAvalicao.push(formOBJ)
        } else {
            listAvalicao.push(formOBJ)
        }
        localStorage.removeItem("formTemp");
        localStorage.setItem("listAvalicao", JSON.stringify(listAvalicao))
    }

    return (
        <div className="w-96 h-3/4 rounded-xl bg-white flex items-center flex-col mx-3">
            <span className='font-bold text-2xl mt-12 mb-8'>Feedback</span>
            <div className='w-3/4 flex justify-evenly'>
                <img onClick={() => handleStar(1)} className="w-10 h-10 stars start_1" src="/star_active.png" alt="star 1" />
                <img onClick={() => handleStar(2)} className="w-10 h-10 stars start_2" src="/star_active.png" alt="star 2" />
                <img onClick={() => handleStar(3)} className="w-10 h-10 stars start_3" src="/star_active.png" alt="star 3" />
                <img onClick={() => handleStar(4)} className="w-10 h-10 stars start_4" src="/star_active.png" alt="star 4" />
                <img onClick={() => handleStar(5)} className="w-10 h-10 stars start_5" src="/star_active.png" alt="star 5" />
            </div>
            <div className='w-3/4 mt-5'>
                <span className=' text-sm text-gray-600'>Conte mais sobre sua experiência:</span>
            </div>
            <textarea maxLength={300} onChange={(e) => handleDescription(e.target.value)} className='border-2 w-3/4' rows={8}></textarea>
            <Link href='/'>
                <button onClick={sendAssess} className='hover:bg-blue-700 font-bold bg-blue-500 text-white px-9 py-3 rounded-lg mt-8'>Enviar</button>
            </Link>
        </div>
    )
}