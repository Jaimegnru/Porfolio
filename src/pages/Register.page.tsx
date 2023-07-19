import { Label } from "../components/atoms/label/Label.Components"
import { Button } from '../components/atoms/button/button.components';
import { useForm } from "../hooks/useForm.hooks";
import { useNavigate } from "react-router-dom";
import { FormEvent } from 'react';

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
    <main className="flex flex-col w-screen h-screen items-center justify-between bg-sky-100">
      <header className="flex flex-row justify-evenly gap-3 bg-sky-200 w-full overflow-auto">
        <Button text="INICIO" onClick={() => navigate('/')} />
        <Button text="ESTUDIOS" />
        <Button text="EXPERIENCIAS" />
        <Button text="CONTACTO" />
        <Button text="WEATHER" onClick={() => navigate('/weather')}/>
        <Button text="LOGIN" onClick={() => navigate('/login')} />
      </header>
      <form onSubmit={onSubmit}>
        <div className="flex flex-col p-4 rounded bg-sky-200 w-2/6 items-center justify-center gap-5 border-2 border-solid border-sky-600">
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
          <Button text="REGISTRAR" variant="filled" />
            <Button text="RESET" variant="filled" onClick={resetForm} />
          </div>
        </div>
      </form>
      <div></div>
    </main>
  )
}