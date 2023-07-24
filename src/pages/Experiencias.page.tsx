
import image_CompSto from "../assets/computerStore.png"
import image_sermicro from "../assets/sermicro.png"
import image_sprinter from "../assets/sprinter.png"

import { Header } from '../components/atoms/Header/Header.component';

export const Experiencias = () => {

    return (
        <div className="h-screen w-screen bg-sky-100">
            <Header />
            <main className="flex flex-col sm:flex-col items-center justify-evenly mt-20 p-2 gap-4 max-h-full h-full bg-sky-100">
                <div className="flex justify-center w-full">
                    <div className="flex flex-col sm:flex-row justify-center sm:justify-evenly items-center w-4/6 gap-2 sm:gap-8">
                        <img src={image_CompSto} className="h-32 w-48 sm:h-32 sm:w-56" />
                        <div className="flex flex-col items-center justify-center">
                            <h1 className="text-sky-600 font-medium text-center text-2xl">Técnico Informático</h1>
                            <h2 className="text-sky-600 font-medium  text-center">Técnico en tienda para reparaciones y mantenimiento de equipos informáticos y asesoramiento en tienda.</h2>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center w-full">
                    <div className="flex flex-col sm:flex-row-reverse justify-center sm:justify-evenly items-center w-4/6 gap-2 sm:gap-8">
                        <img src={image_sermicro} className="h-32 w-48 sm:h-32 sm:w-56" />
                        <div className="flex flex-col items-center justify-center">
                            <h1 className="text-sky-600 font-medium text-center text-2xl">Técnico Informático</h1>
                            <h2 className="text-sky-600 font-medium text-center">Técnico de campo para empresas instalando y manteniendo equipos informáticos por la comunidad autónoma de Extremadura</h2>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center w-full">
                    <div className="flex flex-col sm:flex-row justify-center sm:justify-evenly items-center w-4/6 gap-2 sm:gap-8">
                        <img src={image_sprinter} className="h-32 w-48 sm:h-32 sm:w-56" />
                        <div className="flex flex-col items-center justify-center">
                            <h1 className="text-sky-600 font-medium text-center text-2xl">Vendedor</h1>
                            <h2 className="text-sky-600 font-medium text-center ">Empleado en ventas de calzado y textil, logística en almacén y atención al cliente</h2>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}