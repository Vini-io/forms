"use client"
import "@/styles/form.css";
import { useEffect, useState } from "react";

export default function Form() {


    const [formTemp, setformTemp] = useState({
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

    const handleFormChange = (NewValue: string, id: string) => {
        if (id == "setor") {
            setformTemp(prevNewValue => ({
                ...prevNewValue,
                setor: NewValue
            }))
        } else if (id == "unidade") {
            setformTemp(prevNewValue => ({
                ...prevNewValue,
                unidade: NewValue
            }))
        } else if (id == "nome") {
            setformTemp(prevNewValue => ({
                ...prevNewValue,
                nome: NewValue
            }))
        } else if (id == "telefone") {
            setformTemp(prevNewValue => ({
                ...prevNewValue,
                telefone: NewValue
            }))
        } else if (id == "cpf") {
            setformTemp(prevNewValue => ({
                ...prevNewValue,
                cpf: NewValue
            }))
        } else if (id == "email") {
            setformTemp(prevNewValue => ({
                ...prevNewValue,
                email: NewValue
            }))
        }
    }

    function navForm(value: boolean) {

        if (value) {
            //anomimo

            formTemp.ano = true
            formTemp.nome = "Anônimo"

            localStorage.setItem("formTemp", JSON.stringify(formTemp));

            window.location.href = '/formulario/avaliacao'
        } else {

            if (formTemp.setor == '') {
                //console.log(formTemp.setor)
                const setor = document.querySelector(".setor")
                setor?.classList.add("error")
                setor?.classList.add("placeholder-red-500")

            } else if (formTemp.unidade == '') {

                const unidade = document.querySelector(".unidade")
                unidade?.classList.add("error")
                unidade?.classList.add("placeholder-red-500")

            } else if (formTemp.nome == '') {

                const nome = document.querySelector(".nome")
                nome?.classList.add("error")
                nome?.classList.add("placeholder-red-500")

            } else if (formTemp.cpf == '') {

                const cpf = document.querySelector(".cpf")
                cpf?.classList.add("error")
                cpf?.classList.add("placeholder-red-500")

            } else if (formTemp.email == '') {

                const email = document.querySelector(".email")
                email?.classList.add("error")
                email?.classList.add("placeholder-red-500")

            } else {
                localStorage.setItem("formTemp", JSON.stringify(formTemp));
                window.location.href = '/formulario/avaliacao'

            }
        }

    }

    useEffect(() => {
        const setor = document.querySelector(".setor")
        const unidade = document.querySelector(".unidade")
        const nome = document.querySelector(".nome")
        const cpf = document.querySelector(".cpf")
        const email = document.querySelector(".email")
        setor?.classList.remove("error")
        unidade?.classList.remove("error")
        nome?.classList.remove("error")
        cpf?.classList.remove("error")
        email?.classList.remove("error")
        setor?.classList.remove("placeholder-red-500")
        unidade?.classList.remove("placeholder-red-500")
        nome?.classList.remove("placeholder-red-500")
        cpf?.classList.remove("placeholder-red-500")
        email?.classList.remove("placeholder-red-500")

    }, [formTemp]);

    return (
        <div className="bg-white min-h-4/5 rounded-3xl form p-10 flex flex-col items-center py-0 mx-3">

            <span className="my-10 text-2xl font-bold text-blue-400 drop-shadow-md">Formulário</span>

            <div className="grid_form grid grid-rows-3 grid-flow-col gap-4 h-1/2 w-full">
                <div className="flex items-center">
                    <input onChange={(e) => handleFormChange(e.target.value, "setor")} placeholder="Qual setor da empresa?" type="text" className="setor border-b-2 pt-3 pb-1 pl-4 placeholder-gray-400 text-gray-900 appearance-none inline-block w-full focus:outline-none focus:ring-2 focus:ring-blue-600" />
                </div>
                <div className="flex items-center">
                    <input onChange={(e) => handleFormChange(e.target.value, "unidade")} placeholder="Qual unidade?" type="text" className="unidade border-b-2 pt-3 pb-1 pl-4 placeholder-gray-400 text-gray-900 appearance-none inline-block w-full focus:outline-none focus:ring-2 focus:ring-blue-600" />
                </div>
                <div className="flex items-center">
                    <input onChange={(e) => handleFormChange(e.target.value, "nome")} placeholder="Nome" type="text" className="nome border-b-2 pt-3 pb-1 pl-4 placeholder-gray-400 text-gray-900 appearance-none inline-block w-full focus:outline-none focus:ring-2 focus:ring-blue-600" />
                </div>
                <div className="flex items-center">
                    <input onChange={(e) => handleFormChange(e.target.value, "telefone")} placeholder="Telefone" type="text" className="telefone border-b-2 pt-3 pb-1 pl-4 placeholder-gray-400 text-gray-900 appearance-none inline-block w-full focus:outline-none focus:ring-2 focus:ring-blue-600" />
                </div>
                <div className="flex items-center">
                    <input onChange={(e) => handleFormChange(e.target.value, "cpf")} placeholder="CPF" type="text" className="cpf border-b-2 pt-3 pb-1 pl-4 placeholder-gray-400 text-gray-900 appearance-none inline-block w-full focus:outline-none focus:ring-2 focus:ring-blue-600" />
                </div>
                <div className="flex items-center">
                    <input onChange={(e) => handleFormChange(e.target.value, "email")} placeholder="Email" type="email" className="email border-b-2 pt-3 pb-1 pl-4 placeholder-gray-400 text-gray-900 appearance-none inline-block w-full focus:outline-none focus:ring-2 focus:ring-blue-600" />
                </div>

            </div>
            <div className="w-full mt-2 mb-10 flex justify-between">
                <span onClick={() => navForm(true)} className="text-blue-400 cursor-pointer hover:text-blue-500"> Enviar como anônimo</span>
            </div>

            <button onClick={() => navForm(false)} className="btn-continuar mt-6 mb-14 bg-purple-500 hover:bg-white hover:text-purple-500 hover:border-purple-500 border-4 border-white text-white p-3 px-5 rounded-md w-1/2 text-xl font-bold">Continuar</button>

        </div >
    )
}