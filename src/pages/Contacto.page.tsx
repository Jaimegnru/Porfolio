import { ContactMe } from "../components/atoms/ContactMe/ContactMe.component";
import { ContactMeForm } from "../components/atoms/ContactMeForm/ContactMeForm.component";
import { Footer } from "../components/atoms/Footers/Footers.component";
import { Header } from "../components/atoms/Header/Header.component";

export const Contacto = () => {
  return (
    <div className="max-h-screen h-[calc(100vh-80px)] w-screen bg-sky-100">
      <Header />
      <main className="flex flex-col h-full items-center w-full justify-center mt-20">
        <div className="flex flex-col sm:flex-row h-full items-center w-full sm:w-4/6 justify-evenly p-2 gap-4">
          <ContactMe />
          <ContactMeForm />
        </div>
      </main>
      <Footer/>
    </div>
  )
}