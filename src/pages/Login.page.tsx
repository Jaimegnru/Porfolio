import { Label } from "../components/atoms/label/Label.Components"
import { Button } from '../components/atoms/button/button.components';
import { useForm } from "../hooks/useForm.hooks";
import { useNavigate } from "react-router-dom";
import { FormEvent, useContext } from "react";
import { AppContext } from "../contexts/App.contexts";
import { Header } from "../components/atoms/Header/Header.component";

export interface LoginResponse {
    user: User;
    token: string;
}

const initialLoginForm: LoginDataI = { email: '', password: '' };

interface LoginDataI {
    email: string,
    password: string
}

export interface User {
    name: string;
    email: string;
    role: string;
    status: boolean;
    google: boolean;
    uid: string;
}

export const Login = () => {

    const navigate = useNavigate();

    const { formData, onChange, resetForm } = useForm<LoginDataI>(initialLoginForm);
    const { setToken, setUser } = useContext(AppContext)

    const onSubmit = async (e?: FormEvent) => {

        e?.preventDefault();

        try {
            const resp = await fetch('https://noderestserver-production-241a.up.railway.app/api/v1/auth/login',
                {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json; charset=UTF-8',
                    },
                    body: JSON.stringify(formData)
                });
            const data: LoginResponse = await resp.json()
            if(!!data.token){
                setToken(data.token);
                setUser(data.user);
                localStorage.setItem('token', data.token);
                localStorage.setItem('user', JSON.stringify(data.user));
            }
        } catch (error) {
        }
    }

    return (
        <div className="max-h-screen h-[calc(100vh-80px)] w-screen bg-sky-100">
            <Header />
            <main className="flex flex-col sm:flex-col h-full items-center justify-center mt-20 p-2 gap-20 ">
                <div className="flex flex-col p-4 rounded bg-sky-200 w-full sm:w-4/6 items-center justify-center gap-5 border-2 border-solid border-sky-600">
                    <div>
                        <h1 className="text-center text-2xl text-sky-600 font-medium">INICIAR SESION</h1>
                    </div>
                    <div className="flex flex-col rounded bg-sky-200 ">
                        <Label label="Correo:" name="email" type="email" value={formData.email} onChange={onChange} />
                        <Label label="Contraseña:" name="password" type="password" value={formData.password} onChange={onChange} />
                    </div>
                    <div className="flex flex-row justify-center gap-4">
                        <p className="text-sky-600 font-medium">¿No tienes cuenta?</p>
                        <p className="text-sky-600 font-medium underline cursor-pointer" onClick={() => navigate('/registro')}>Registrate</p>
                    </div>
                    <div className="flex justify-between w-full">
                        <Button text="INICIAR SESION" variant="filled" onClick={onSubmit} />
                        <Button text="RESET" variant="filled" onClick={resetForm} />
                    </div>
                </div>
            </main>
        </div>
    )
}