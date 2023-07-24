import CallIcon from '@mui/icons-material/Call';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import MailIcon from '@mui/icons-material/Mail';

export const ContactMe = () => {
    return (
        <div className="flex flex-col justify-center items-center w-full mt-20 sm:mt-0">
            <div className="flex flex-col justify-center w-full rounded sm:w-auto gap-8 border-solid border-2 border-sky-600 bg-sky-200 p-4">
                <h1 className="text-center text-sky-600 font-medium text-2xl  ">CONTÁCTAME</h1>
                <div className="flex flex-col gap-2">
                    <div className="flex flex-row text-center text-sky-600 font-medium gap-8">
                        <CallIcon fontSize="large" />
                        <h1>697468164</h1>
                    </div>
                    <div className="flex flex-row text-center text-sky-600 font-medium gap-8">
                        <PersonPinIcon fontSize="large" />
                        <h1>Cáceres, Extremadura</h1>
                    </div>
                    <div className="flex flex-row text-center text-sky-600 font-medium gap-8">
                        <MailIcon fontSize="large" />
                        <h1>jaimegn59@gmail.com</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}
