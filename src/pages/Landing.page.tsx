import { Button } from "../components/atoms/button/button.components"
import image from "../assets/avatar.png"

export const Landing = () => {

  return (
    <main>
      <header className="flex flex-row justify-center gap-3 bg-sky-200">
        <Button text="SOBRE MI" />
        <Button text="ESTUDIOS" />
        <Button text="EXPERIENCIAS" />
        <Button text="CONTACTO" />
        <Button text="LOGIN" />
      </header>
      <div className="flex">
        <img src={image} className="h-50 w-50" />
        <h1>Hola soy Jaime y este es mi porfolio</h1>
        <h2>¡Espero que les guste! </h2>
      </div>
    </main>
  )
}