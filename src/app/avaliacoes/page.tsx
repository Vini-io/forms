"use client"
import { useEffect, useState } from "react"
import "@/styles/avaliacoes.css"
import Image from 'next/image';
export default function Avaliacoes() {


    type typeAvaliacao = {
        setor: string,
        unidade: string,
        nome: string,
        telefone: string,
        cpf: string,
        email: string,
        ano: boolean,
        star: number,
        description: string
    }

    const [avaliacoes, setAvaliacoes] = useState<typeAvaliacao[]>([]);

    useEffect(() => {
        const avaliacoesTemp = localStorage.getItem("listAvalicao")
        if (avaliacoesTemp) {
            setAvaliacoes(JSON.parse(avaliacoesTemp))
        }
    }, [])

    const createStars = (star: number) => {
        const stars = []
        for (let i = 0; i < star; i++) {
            stars.push(
                <Image key={i} className="m-1" src="/star_active.png" alt="star 1" width={30} height={30} />
            )
        }
        star = 5 - star
        for (let i = 0; i < star; i++) {
            stars.push(
                <Image key={i} className="m-1" src="/star.png" alt="star 1" width={30} height={30} />
            )
        }
        return stars
    }


    return (
        <div className="flex flex-col items-center w-full">
            <h1 className="text-3xl text-white font-bold mt-14 mb-14">Avaliações</h1>
            {avaliacoes.map((element: typeAvaliacao, index: number) => (

                <div key={index} className="container bg-white w-1/2  rounded-lg p-5 overflow-y-auto mb-14">
                    <div className="header flex justify-between items-center mb-5">
                        <div className="flex items-center">
                            <Image className="mr-5" src="/perfil.png" alt="perfil" width={35} height={30} />
                            <span className="text-2xl font-bold">{element.nome}</span>
                        </div>
                        <div className="flex stars">
                            {createStars(element.star)}
                        </div>

                    </div>

                    <span >
                        {element.description}
                    </span>
                </div>
            ))
            }
        </div>
    )
}