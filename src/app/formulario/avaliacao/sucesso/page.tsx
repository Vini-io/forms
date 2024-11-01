import { Button } from "@/components/ui/button"
import Link from "next/link"
import "@/styles/sucesso.css"
export default function Sucesso() {
    return (
        <div className="flex flex-col justify-center items-center">
            <h1 className="text-white font-bold text-3xl mb-5 title">Seu Feedback foi enviado com sucesso!</h1>
            <Link href="/">
                <Button>Voltar ao inicio</Button>
            </Link>
        </div>
    )
}