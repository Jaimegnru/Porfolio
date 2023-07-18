import React from 'react'
import { useState } from 'react';
import { MenuItem } from './MenuItem.component';

interface SubMenuProps {
    title: string,
    items: { text: string }[]
}

export const Select: React.FC<SubMenuProps> = ({title, items}) => {

    const [open, setOpen] = useState(false);

    const toggle = () => {
        setOpen(!open)
    }

    let style = 'z-10 mt-5 flex w-screen max-w-max px-4'

    if (open) {
        style = `absolute ${style}`
    } else {
        style = `hidden ${style}`
    }

    return (
        <div className="relative">
            <button onClick={toggle} type="button" className="text-sky-600 hover:bg-sky-600 hover:text-sky-200 h-20 w-20 px-5 py-2 lg:w-32 font-medium" aria-expanded="false">
                <span>{title}</span>
                {/* <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                </svg> */}
            </button>
            <div className={style}>
                <div className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl  bg-sky-200 text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
                    <div className="p-4">
                        {
                            items.map((item) => (<MenuItem text={item.text} />))
                        }
                    </div>
                </div>
            </div>
        </div>

    )
}
