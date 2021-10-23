import { ButtonHTMLAttributes } from "react";

import '../styles/button.scss';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    isOutlined?: boolean;
};

export function Button({ isOutlined = false, ...props}: ButtonProps) {
    //caso exista isOutlined é adicionado outlined na classe do botao
    return (
        <button 
            className={`button ${isOutlined ? 'outlined' : ''}`} 
            {...props}
        />

    )
}

