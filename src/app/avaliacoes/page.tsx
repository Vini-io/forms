"use client"
import { useEffect, useState } from "react"
import "@/styles/avaliacoes.css"

export default function avaliacoes() {

    const [avaliacoes, setAvaliacoes] = useState([]);

    useEffect(() => {
        let avaliacoesTemp: any = localStorage.getItem("listAvalicao")
        avaliacoesTemp = JSON.parse(avaliacoesTemp)
        if (avaliacoesTemp) setAvaliacoes(avaliacoesTemp)
        

    }, [])
    useEffect(() => {
        console.log(avaliacoes)
    }, [avaliacoes])

    const createStars = (star: number) => {
        let stars = []
        for (let i = 0; i < star; i++) {
            stars.push(
                <img key={i} className="m-1" src="/star_active.png" alt="star 1" width={30} height={30} />
            )
        }
        star = 5 - star
        for (let i = 0; i < star; i++) {
            stars.push(
                <img key={i} className="m-1" src="/star.png" alt="star 1" width={30} height={30} />
            )
        }
        return stars
    }


    return (
        <div className="flex flex-col items-center w-full">
            <h1 className="text-3xl text-white font-bold">Avaliações</h1>
            {avaliacoes.map((element: any) => (

                <div key={element.id} className="container bg-white w-1/2  rounded-lg p-5 overflow-y-auto mt-10">
                    <div className="header flex justify-between items-center mb-5">
                        <div className="flex items-center">
                            <img className="mr-5" src="/perfil.png" alt="perfil" width={35} height={30} />
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