import {ERRORS} from "@/shared/constants";

export type Values = {
    [key: string]: string
}

export type errors = {
    [key: string]: string
}

export function validateForm(values: Values) {
    const errors: errors = {};
    if (!values.fullName) {
        errors.fullName = ERRORS.ERROR_NAME
    } else if (values.fullName.length < 2) {
        errors.fullName = ERRORS.ERROR_NAME
    }
    if (!values.email && values.checkboxState === 'on') {
        errors.email = ERRORS.ERROR_EMAIL_EMPTY;
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i.test(values.email) && values.checkboxState === 'on') {
        errors.email = ERRORS.ERROR_EMAIL_INCORRECT;
    }
    if (!values.password) {
        errors.password = ERRORS.ERROR_PASSWORD;
    } else if (values.password.length < 6) {
        errors.password = ERRORS.ERROR_PASSWORD;
    }

    if (!values.confirmPassword) {
        errors.confirmPassword = ERRORS.ERROR_CONFIRM_PASSWORD;
    }
    if (values.confirmPassword !== values.password) {
        errors.confirmPassword = ERRORS.ERROR_CONFIRM_PASSWORD;
    }

    if (values.city === 'Выберите город') {
        errors.city = ERRORS.ERROR_CITY;
    }
    return errors;
}