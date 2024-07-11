import {Input, Button, Typography, Checkbox, Select, Divider} from "@/shared/ui";
import { CAPTIONS } from "@/shared/constants";
import { getDate } from "@/shared/utils/getDate";
import s from './form.module.scss';
import { phoneMask} from "@/shared/utils";
import {ChangeEvent, FormEvent} from "react";
import {Values, errors} from "@/shared/utils/formValidate.ts";

type Props = {
    values: Values
    errors: errors,
    handleSubmit: (e: FormEvent<HTMLFormElement>) => void
    handleChange: (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => void
}

export const Form = (props: Props) => {
    const { values, errors, handleSubmit, handleChange } = props;

    return (
        <form onSubmit={handleSubmit} className={s.form}>
            <Input
                type="text"
                error={errors.fullName}
                value={values.fullName}
                handleChange={handleChange}
                caption={CAPTIONS.CAPTION_NAME}
                required
                label="Имя"
                name="fullName"
            />
            <Select
                handleChange={handleChange}
                value={values.city}
                error={errors.city}
            />
            <Divider />
                <Input
                    type="password"
                    error={errors.password}
                    value={values.password}
                    handleChange={handleChange}
                    caption={CAPTIONS.CAPTION_PASSWORD}
                    required
                    label="Пароль"
                    name="password"
                />
                <Input
                    type="password"
                    error={errors.confirmPassword}
                    value={values.confirmPassword}
                    handleChange={handleChange}
                    caption={CAPTIONS.CAPTION_REPEAT}
                    required
                    label="Пароль еще раз"
                    name="confirmPassword"
                />
            <Divider />
                <Input
                    type="tel"
                    value={phoneMask(values.phone)}
                    handleChange={handleChange}
                    caption={CAPTIONS.CAPTION_PHONE}
                    label="Номер телефона"
                    name="phone"
                    placeholder="+7 (***) ***-**-**"
                />
                <Input
                    type="text"
                    error={values.checkboxState === 'on' ? errors.email : ''}
                    value={values.email}
                    handleChange={handleChange}
                    caption={CAPTIONS.CAPTION_EMAIL}
                    required={values.checkboxState === 'on'}
                    label="Электронная почта"
                    name="email"
                />
                <Checkbox handleChange={handleChange} />
            <div className={s.submitBlock}>
                <Button type="submit" className={s.formButton}>
                    Изменить
                </Button>
                <Typography variant="caption">
                    {Object.keys(errors).length === 0 && getDate()}
                </Typography>
            </div>
        </form>
    );
};