import { useNavigate } from 'react-router-dom';
import { Button } from '../button/button.components'

export const Header = () => {

    const navigate = useNavigate();
    return (
        <header className="fixed top-0 bottom-auto flex gap-3 bg-sky-200 w-full overflow-auto h-20 border-b-2 border-sky-600 justify-center items-center">
            <div className='flex w-full h-full sm:w-3/6 justify-between'>
                <Button text="INICIO" onClick={() => navigate('/')} />
                <Button text="EXPERIENCIAS" onClick={() => navigate('/experiencias')} />
                <Button text="CONTACTO" onClick={() => navigate('/contacto')} />
                <Button text="WEATHER" onClick={() => navigate('/weather')} />
                <Button text="LOGIN" onClick={() => navigate('/login')} />
            </div>
        </header>
    )
}
