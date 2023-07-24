import image_ava from "../assets/avatar.png"
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import { IconButton } from "@mui/material"
import { Header } from "../components/atoms/Header/Header.component";

export const Landing = () => {


  return (
    
    <div className="max-h-screen h-[calc(100vh-80px)] w-screen bg-sky-100">
      <Header />
      <main className="flex flex-col sm:flex-col h-full items-center justify-center mt-20 p-2 gap-4">
        <div className="flex justify-center w-full">
          <div className="flex flex-col sm:flex-row justify-center sm:justify-evenly items-center w-4/6">
            <img src={image_ava} className="h-48 w-48 sm:h-72 sm:w-80" />
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-sky-600 font-medium text-justify-center text-center text-2xl">Hola soy Jaime y este es mi porfolio</h1>
              <h2 className="text-sky-600 font-medium text-justify-center">¡Espero que le guste! </h2>
            </div>
          </div>
        </div>
        <div className="bg-sky-100">
          <div className="flex flex-row justify-center">
            <IconButton size="large" href="https://instagram.com/jaimee_gnru21?igshid=OGQ5ZDc2ODk2ZA==" target="_blank"><InstagramIcon fontSize="large" className="text-sky-600" /></IconButton>
            <IconButton size="large" href="https://twitter.com/jaimegnru?s=21&t=Hd0CUjY2wJ7Gsxszw602xQ" target="_blank"><TwitterIcon fontSize="large" className="text-sky-600"/></IconButton>
            <IconButton size="large" href="https://www.linkedin.com/in/jaime-gal%C3%A1n-rubio-b703481a3/?originalSubdomain=es" target="_blank"><LinkedInIcon fontSize="large" className="text-sky-600"/></IconButton>
          </div>
        </div>
    </main>
    </div>
  )
}