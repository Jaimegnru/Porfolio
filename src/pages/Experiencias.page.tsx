import { Button } from "../components/atoms/button/button.components"
import image_CompSto from "../assets/computerStore.png"
import image_sermicro from "../assets/sermicro.png"
import image_sprinter from "../assets/sprinter.png"

import { useNavigate } from "react-router-dom"

export const Experiencias = () => {

    const navigate = useNavigate();

    return (
        <main className="bg-sky-100 w-screen h-screen max-h-screen max-w-screen flex flex-col gap-20 overflow-y-auto">
            <header className="flex flex-row justify-evenly gap-3 bg-sky-200 w-full overflow-x-auto overflow-y-hidden h-auto">
                <Button text="INICIO" onClick={() => navigate('/')} />
                <Button text="ESTUDIOS" />
                <Button text="EXPERIENCIAS" onClick={() => navigate('/experiencias')} />
                <Button text="CONTACTO" onClick={() => navigate('/contacto')}/>
                <Button text="WEATHER" onClick={() => navigate('/weather')} />
                <Button text="LOGIN" onClick={() => navigate('/login')} />
            </header>
            <div className="flex justify-center w-full ">
                <div className="flex flex-col sm:flex-row justify-center sm:justify-evenly items-center w-4/6 gap-20">
                    <img src={image_CompSto} className="h-32 w-48 sm:h-32 sm:w-56" />
                    <div className="flex flex-col items-center justify-center">
                        <h1 className="text-sky-600 font-medium text-center text-2xl">Técnico Informático</h1>
                        <h2 className="text-sky-600 font-medium  text-center">Técnico en tienda para reparaciones y mantenimiento de equipos informáticos y asesoramiento en tienda.</h2>
                    </div>
                </div>
            </div>
            <div className="flex justify-center w-full">
                <div className="flex flex-col sm:flex-row justify-center sm:justify-evenly items-center w-4/6 gap-20">
                    <div className="flex flex-col items-center justify-center">
                        <h1 className="text-sky-600 font-medium text-center text-2xl">Técnico Informático</h1>
                        <h2 className="text-sky-600 font-medium text-center">Técnico de campo para empresas instalando y manteniendo equipos informáticos por la comunidad autónoma de Extremadura</h2>
                    </div>
                    <img src={image_sermicro} className="h-48 w-48 sm:h-40 sm:w-56" />
                </div>
            </div>
            <div className="flex justify-center w-full">
                <div className="flex flex-col sm:flex-row justify-center sm:justify-evenly items-center w-4/6 gap-20">
                    <img src={image_sprinter} className="h-32 w-48 sm:h-48 sm:w-64" />
                    <div className="flex flex-col items-center justify-center">
                        <h1 className="text-sky-600 font-medium text-center text-2xl">Vendedor</h1>
                        <h2 className="text-sky-600 font-medium text-center ">Empleado en ventas de calzado y textil, logística en almacén y atención al cliente</h2>
                    </div>
                </div>
            </div>
        </main>
    )
}