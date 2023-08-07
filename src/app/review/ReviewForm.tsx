"use client";

import { useState } from "react";


export default function ReviewForm(){
    const [loading, setLoading] = useState(false);

    async function handleSubmit(event: any) {
        event.preventDefault();
        setLoading(true);

        const data = {
            name: String(event.target.name.value),
            email: String(event.target.email.value),
            categoria: String(event.target.categoria.value),
            review: String(event.target.review.value)
        };

        const response = await fetch ("/api/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })

        if (response.ok) {
            console.log("Reseña enviada correctamente")
            setLoading(false)
        }
        if (!response.ok) {
            console.log("Error al enviar la reseña")
            setLoading(false)
        }
    }

    return(
        <form onSubmit={handleSubmit}>
                <div className="w-full flex flex-col my-9">
                    <label className="font-bold text-gray-800 text-xl" htmlFor="name">Nombre</label>
                    <input className="p-4 bg-gray-50 border border-gray-100" type="text" required minLength={2} maxLength={50} autoComplete="off" id="name" />
                </div>
                <div className="w-full flex flex-col my-9">
                    <label className="font-bold text-gray-800 text-xl" htmlFor="email">Correo electronico</label>
                    <input className="p-4 bg-gray-50 border border-gray-100" type="email" required minLength={5} maxLength={150} autoComplete="off" id="email" />
                </div>
                <div>
                    <label className="font-bold text-gray-800 text-xl" htmlFor="categoria">Seleccione su categoria:</label>
                    <select className="p-2 m-4 border text-lg font-semi-bold" name="categoria" id="categoria">
                        <option value="categoria 1">Escaner de virus</option>
                        <option value="categoria 2">Limpieza de residuos y cache</option>
                        <option value="categoria 3">Rastreador de travestis</option>
                    </select>
                </div>
                <div>
                    <label className="font-bold text-gray-800 text-xl my-9" htmlFor="review">Opinion</label>
                    <textarea rows={4} className="w-full p-4 bg-gray-50 border border-gray-100" required minLength={10} maxLength={500}></textarea>
                </div>
                <button type="submit" className="px-4 py-2 w-40 bg-yellow-500 text-black font-medium mt-4 font-bold rounded-md">Enviar</button>
            </form>
    )
}