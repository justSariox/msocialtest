import {biggestCity, formatCities} from "@/shared/utils/formatCities.ts";
import {ChangeEvent} from "react";

import s from './select.module.scss'

type Props = {
    handleChange?: (e: ChangeEvent<HTMLSelectElement>) => void
    value?: string
    error?: string
}

export const Select = ({ handleChange, value, error }: Props) => {
    const citiesList = formatCities().filter(city => city.population !== biggestCity().population).map((city) => {
        return (
            <option
                className={s.option}
                key={city.population.toString()}
                value={city.city}>
                {city.city}
            </option>
        );
    });

    return (
        <div className={s.selectContainer}>
            <label className={s.label} htmlFor='cities'>
                Ваш город
            </label>
            <select
                className={s.select}
                value={value}
                name='city'
                id='cities'
                onChange={handleChange}
                required>
                <option className={s.option} value='Выберите город' disabled>
                    Выберите город
                </option>
                <option className='select__option' value={biggestCity().city}>
                    {biggestCity().city}
                </option>
                {citiesList}
            </select>
            {error && (
                <p className='select__error-caption'>{error}</p>
            )}
        </div>
    );
};
