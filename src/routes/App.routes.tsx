import { Routes, Route } from 'react-router-dom'
import { Landing } from '../pages/Landing.page'
import { Login } from '../pages/Login.page'
import { Registro } from '../pages/Register.page';
import { Weather } from '../pages/Weather.page'
import { ProtectedRoutes } from './Protected.routes'
import { Experiencias } from '../pages/Experiencias.page';


export const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Landing />} />
            <Route path='/login' element={<Login />} />
            <Route path='/registro' element={<Registro />} />
            <Route path='/weather' element={<Weather />} />
            <Route path='experiencias' element={<Experiencias />} />

            <Route element={<ProtectedRoutes/>}>
                <Route path='/weather' element={<Weather />} />
            </Route>
        </Routes>
    )
}
