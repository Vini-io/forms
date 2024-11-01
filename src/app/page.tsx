import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center">
      <span className="mb-5 text-white font-bold text-lg">Faça sua avaliação</span>
      <div>
        <Link href="/formulario" className="mr-2">
          <Button>Avaliar</Button>
        </Link>
        <Link href="/avaliacoes" className="ml-2">
          <Button>Avaliações</Button>
        </Link>
      </div>
    </div>
  );
}
