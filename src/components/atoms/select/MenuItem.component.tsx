import React from 'react'

interface MenuItemProps {
    text: string,
}

export const MenuItem: React.FC<MenuItemProps> = ({text}) => {
    return (
        <div className="group relative flex gap-x-6 rounded-lg p-4 bg-sky-200 hover:bg-sky-600">
            <div>
                <a href="#" className="font-bold  text-sky-600 hover:text-sky-200 ">
                    {text}
                    <span className="absolute inset-0"></span> 
                </a>
            </div>
        </div>
    )
}