import { Routes, Route, Navigate } from 'react-router-dom'
import { Landing } from '../pages/Landing.page'
import { Login } from '../pages/Login.page'
import { Registro } from '../pages/Register.page';
import { Weather } from '../pages/Weather.page'
import { ProtectedRoutes } from './Protected.routes'


export const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Landing />} />
            <Route path='/login' element={<Login />} />
            <Route path='/registro' element={<Registro />} />
            <Route path='/weather' element={<Weather />} />
            <Route element={<ProtectedRoutes/>}>
                <Route path='/weather' element={<Weather />} />
            </Route>
            <Route path={"/Porfolio"} element={<Navigate to={"/"}/>}/>
        </Routes>
    )
}
