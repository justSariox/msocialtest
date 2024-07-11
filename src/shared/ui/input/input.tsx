import {ChangeEvent, useState} from "react";
import s from './input.module.scss'
import {Typography} from "@/shared/ui";

type Props = {
    value?: string,
    handleChange?: (e: ChangeEvent<HTMLInputElement>) => void
    error?: string
    type?: 'password' | 'text' | 'tel'
    caption?: string
    required?: boolean
    label?: string
    name?: string
    placeholder?: string
}

export const Input = (props: Props) => {
    const {
        handleChange,
        error,
        value,
        type = 'text',
        caption,
        required,
        label,
        name,
        placeholder
    } = props
    const [visiblePassword, setVisiblePassword] = useState<boolean>(false)


    return (
        <div className={s.inputWrapper}>
            <div className={s.label}>
                <label>{label}</label>
                <span className={s.required}>{required && '*'}</span>
            </div>
            <div className={s.inputContainer}>
                <input
                    className={error ? s.error : s.input}
                    type={'password' && visiblePassword ? 'text' : type === 'tel' ? 'tel' : type}
                    value={value}
                    onChange={handleChange}
                    name={name}
                    placeholder={placeholder}
                />

                {type === 'password' && (
                    <a
                        className={`${s.passwordControl} ${
                            visiblePassword ? s.showPassword : s.hidePassword
                        }`}
                        onClick={() => {
                            setVisiblePassword(prevState => !prevState)
                        }}
                    ></a>
                )}
                {error ? (
                    <Typography variant="caption" className={s.errorMessage}>{error}</Typography>
                ) : (
                    ''
                )}
            </div>
            <Typography variant="caption" className={s.caption}>
                {caption}
            </Typography>
        </div>
    );
};
