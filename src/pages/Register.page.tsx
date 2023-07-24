import { Label } from "../components/atoms/label/Label.Components"
import { Button } from '../components/atoms/button/button.components';
import { useForm } from "../hooks/useForm.hooks";
import { useNavigate } from "react-router-dom";
import { FormEvent } from 'react';
import { Header } from "../components/atoms/Header/Header.component";

export interface User {
  name: string;
  email: string;
  role: string;
  status: boolean;
  google: boolean;
  uid: string;
}

interface RegisterDataI {
  email: string;
  password: string;
  role: string;
  name: string;
}
const initialRegister: RegisterDataI = { name: '', email: '', password: '', role: 'ADMIN_ROLE' };

export const Registro = () => {

  const { formData, onChange, resetForm } = useForm<RegisterDataI>(initialRegister)

  const onSubmit = async (e?: FormEvent) => {

    e?.preventDefault();

    try {
      const resp = await fetch('https://noderestserver-production-241a.up.railway.app/api/v1/users/',
        {
          method: 'POST',
          headers: {
            'content-type': 'application/json; charset=UTF-8',
          },
          body: JSON.stringify(formData)
        });
      const data: User = await resp.json()
      console.log(data)
    } catch (error) {
    }
  }
  const navigate = useNavigate();


  return (
    <div className="max-h-screen h-[calc(100vh-80px)] w-screen bg-sky-100">
      <Header />
      <main className="flex flex-col sm:flex-col h-full items-center justify-center mt-20 p-2 gap-20 ">
        <div className="flex flex-col p-4 rounded bg-sky-200 w-full sm:w-4/6  items-center justify-center gap-5 border-2 border-solid border-sky-600">
            <div>
              <h1 className="text-center text-2xl text-sky-600 font-medium">REGISTRARSE</h1>
            </div>
            <div className="flex flex-col rounded bg-sky-200">
              <Label label="Nombre:" name="name" type="text" value={formData.name} onChange={onChange} />
              <Label label="Correo:" name="email" type="email" value={formData.email} onChange={onChange} />
              <Label label="Contraseña:" name="password" type="password" value={formData.password} onChange={onChange} />
            </div>
            <div className="flex flex-row justify-center gap-4">
              <p className="text-sky-600 font-medium">¿Ya tienes cuenta?</p>
              <p className="text-sky-600 font-medium underline cursor-pointer" onClick={() => navigate('/login')}>Inicia sesion</p>
            </div>
            <div className="flex justify-between w-full">
              <Button text="REGISTRAR" variant="filled" onClick={onSubmit}/>
              <Button text="RESET" variant="filled" onClick={resetForm} />
            </div>
        </div>
      </main>
    </div>
  )
}