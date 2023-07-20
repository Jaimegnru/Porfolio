import { Button } from "../components/atoms/button/button.components"
import image_phone from "../assets/phone.png"
import image_casa from "../assets/casa.png"
import image_email from "../assets/email.png"

import { useNavigate } from "react-router-dom"
import { Label } from "../components/atoms/label/Label.Components";

export const Contacto = () => {

  const navigate = useNavigate();

  return (
    <main className="flex flex-col w-screen h-screen items-center justify-between bg-sky-100">
    <header className="flex flex-row justify-evenly gap-3 bg-sky-200 w-full overflow-auto">
        <Button text="INICIO" onClick={() => navigate('/')} />
        <Button text="ESTUDIOS" />
        <Button text="EXPERIENCIAS" onClick={() => navigate('/experiencias')}/>
        <Button text="CONTACTO" onClick={() => navigate('/contacto')}/>
        <Button text="WEATHER" onClick={() => navigate('/weather')}/>
        <Button text="LOGIN" onClick={() => navigate('/login')} />
    </header>
    <div className="flex flex-row gap-24">
      <div className="flex flex-col p-4 rounded bg-sky-200 items-center justify-center gap-5 border-2 border-solid border-sky-600">
          <div>
              <h1 className="text-center text-2xl text-sky-600 font-medium">FORMULARIO DE CONTACTO</h1>
          </div>
          <div className="flex flex-col rounded bg-sky-200 ">
              <Label label="Nombre:" name="nombre" type="text" variant="normal"/>
              <Label label="Correo:" name="email" type="text" variant="normal"/>
              <Label label="Asunto:" name="asunto" type="text" variant="normal"/>
              <Label label="Mensaje:" name="mensaje" type="text" variant="mensaje"/>
          </div>
          <div className="flex justify-end w-full">
              <Button text="ENVIAR" variant="filled"/>
          </div>
      </div>
      <div className="flex flex-col">
        <div className="flex flex-row">
          <img src={image_phone} className="h-16 w-24" />
          <h1>697468164</h1>
        </div>
        <div className="flex flex-row">
          <img src={image_casa} className="h-16 w-16" />
          <h1>Cáceres, Extremadura</h1>
        </div>
        <div className="flex flex-row">
          <img src={image_email} className="h-16 w-16" />
          <h1>jaimegn59@gmail.com</h1>
        </div>
        <div>
          <h1>Hola me llamo jaime</h1>
        </div>
      </div>
    </div>
    <div></div>
</main>
  )
}