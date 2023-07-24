import { Button } from "../button/button.components"
import { Label } from "../label/Label.Components"

export const ContactMeForm = () => {
    return (
        <div className="flex flex-col justify-center items-center w-full">
            <div className="flex flex-col justify-center w-full rounded sm:w-auto gap-8 border-solid border-2 border-sky-600 bg-sky-200 p-4">
                <div>
                    <h1 className="text-center text-2xl text-sky-600 font-medium">FORMULARIO DE CONTACTO</h1>
                </div>
                <div className="flex flex-col rounded bg-sky-200 ">
                    <Label label="Nombre:" name="nombre" type="text" variant="normal" />
                    <Label label="Correo:" name="email" type="text" variant="normal" />
                    <Label label="Asunto:" name="asunto" type="text" variant="normal" />
                    <Label label="Mensaje:" name="mensaje" type="text" variant="mensaje" />
                </div>
                <div className="flex justify-end w-full">
                    <Button text="ENVIAR" variant="filled" />
                </div>
            </div>
        </div>
    )
}
