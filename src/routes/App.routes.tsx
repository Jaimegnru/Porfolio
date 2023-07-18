import { Routes, Route } from 'react-router-dom'
import { Landing } from '../pages/Landing.page'


export const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Landing />} />
        </Routes>
    )
}
