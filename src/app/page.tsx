import Link from "next/link";

export default function Home(){
  return(
    <div className="w-full h-screen flex justify-center items-center text-2xl font-bold">
      <Link href="/review">Escribi tu reseña capo de la vida</Link>
    </div>
  )
}