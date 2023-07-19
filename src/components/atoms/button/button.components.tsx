import React from 'react'

interface buttonProps{
    text?: string,
    onClick?: () => void,
    variant?: "outlined" | "filled",
    value?: string,
}

export const Button: React.FC<buttonProps> = ({text, onClick, variant, value}) => {

    let buttonStyle = "px-5 py-2 font-medium"

    if (variant === "outlined"){
        buttonStyle = `${buttonStyle} text-black bg-white border border-gray-500 hover:bg-green-800 hover:text-white`
    } else {
        buttonStyle = `${buttonStyle} text-sky-600 hover:bg-sky-600 hover:text-sky-200 h-20 min-w-20`
    }
    return (
    <button onClick={onClick} className={buttonStyle} value={value}>{text}</button>
    );
}
