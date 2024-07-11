import s from './checkbox.module.scss'
import {ChangeEvent, useCallback, useState} from "react";
import {Typography} from "@/shared/ui";


type Props = {
    handleChange?: (e: ChangeEvent<HTMLInputElement>) => void
}

export const Checkbox = ({ handleChange }: Props) => {
    const [checked, setChecked] = useState(false);

    const handleChangeCheckbox = useCallback((e) => {
        setChecked(e.target.checked);
        handleChange?.(e);
    }, [handleChange]);

    return (
        <div className={s.checkboxWrapper}>
            <div className={s.checkboxContainer}>
                <label className={s.label}>
                    Я согласен
                </label>
                <input
                    className={s.checkboxField}
                    type='checkbox'
                    name='checkboxState'
                    id="checkboxField"
                    checked={checked}
                    onChange={handleChangeCheckbox}
                />
                <Typography variant={"body1"} className={s.caption} htmlFor="checkboxField">
                   принимать актуальную информацию на e-mail
                </Typography>
            </div>
        </div>
    );
};
