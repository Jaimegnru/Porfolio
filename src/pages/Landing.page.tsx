import { Button } from "../components/atoms/button/button.components"
import image_ava from "../assets/avatar.png"
import image_insta from "../assets/Logo_insta.png"
import image_face from "../assets/Logo_face.png"
import image_twi from "../assets/Logo_twi.png"
import image_link from "../assets/Logo_link.png"
import image_wha from "../assets/Logo_wha.png"

import { useNavigate } from "react-router-dom"

export const Landing = () => {

  const navigate = useNavigate();

  return (
    <main className="bg-sky-100 w-screen h-screen flex flex-col">
      <header className="flex flex-row justify-evenly gap-3 bg-sky-200 w-full overflow-auto">
        <Button text="INICIO" onClick={() => navigate('/')} />
        <Button text="ESTUDIOS" />
        <Button text="EXPERIENCIAS" />
        <Button text="CONTACTO" />
        <Button text="WEATHER" onClick={() => navigate('/weather')}/>
        <Button text="LOGIN" onClick={() => navigate('/login')} />
      </header>
      <div className="flex justify-center w-full">
        <div className="flex flex-col sm:flex-row justify-center sm:justify-evenly items-center w-4/6">
          <img src={image_ava} className="h-48 w-48 sm:h-72 sm:w-80" />
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-sky-600 font-medium text-justify-center text-2xl">Hola soy Jaime y este es mi porfolio</h1>
            <h2 className="text-sky-600 font-medium text-justify-center">¡Espero que le guste! </h2>
          </div>
        </div>
      </div>
      <div className="bg-sky-100">
        <div className="flex flex-row justify-center">
        <a href=" https://instagram.com/jaimee_gnru21?igshid=OGQ5ZDc2ODk2ZA=="><img src={image_insta} className="h-16 w-16 sm:h-16 sm:w-16" /></a>
        <a href=""><img src={image_face} className="h-16 w-16 sm:h-16 sm:w-16" /></a>
        <img src={image_wha} className="h-16 w-16 sm:h-16 sm:w-16" />
        <a href="https://twitter.com/jaimegnru?s=21&t=Hd0CUjY2wJ7Gsxszw602xQ"><img src={image_twi} className="h-16 w-16 sm:h-16 sm:w-16" /></a>
        <a href="https://www.linkedin.com/in/jaime-gal%C3%A1n-rubio-b703481a3/?originalSubdomain=es"><img src={image_link} className="h-16 w-16 sm:h-16 sm:w-16" /></a>
        </div>
      </div>
    </main>
  )
}