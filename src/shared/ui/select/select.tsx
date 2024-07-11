import {biggestCity, formatCities} from "@/shared/utils/formatCities.ts";
import {ChangeEvent} from "react";

import s from './select.module.scss'
import {Typography} from "@/shared/ui";

type Props = {
    handleChange?: (e: ChangeEvent<HTMLSelectElement>) => void
    value?: string
    error?: string
}

export const Select = ({ handleChange, value, error }: Props) => {
    console.log(error)
    const citiesList = formatCities().filter(city => city.population !== biggestCity().population).map((city) => {
        return (
            <option
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
            <div>
                <select
                    className={s.select}
                    value={value}
                    name='city'
                    id='cities'
                    onChange={handleChange}
                    required>
                    <option value='Выберите город' disabled>
                        Выберите город
                    </option>
                    <option value={biggestCity().city}>
                        {biggestCity().city}
                    </option>
                    {citiesList}
                </select>
                {error ? (
                    <Typography variant="caption" className={s.error}>{error}</Typography>
                ) : ''}
            </div>
        </div>
    );
};
