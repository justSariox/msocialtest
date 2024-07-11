import { useEffect, useState } from 'react';
import { validateForm, Values } from "@/shared/utils/formValidate.ts";

export const useForm = () => {
    const [values, setValues] = useState<Values>({
        fullName: '',
        city: 'Выберите город',
        password: '',
        confirmPassword: '',
        email: '',
        checkboxState: 'off',
        phone: '',
    });

    const [errors, setErrors] = useState({
        fullName: '',
        password: '',
        confirmPassword: '',
        email: '',
        city: ''
    });

    useEffect(() => {
        const fullName = localStorage.getItem('fullName');
        if (fullName) {
            setValues({ ...values, fullName: fullName });
        }
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors(validateForm(values));
        localStorage.setItem('fullName', values.fullName);
        console.log(JSON.stringify(values));
    };

    useEffect(() => {
        if (Object.keys(errors).length === 0) {
            alert('Данные формы были успешно отправлены');
        }
    }, [errors]);

    return { values, handleChange, handleSubmit, errors };
};
