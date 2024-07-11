import { Typography } from "@/shared/ui";
import { useForm } from "@/shared/hooks";
import { Form } from "@/components";
import s from "./main.module.scss";

export const MainPage = () => {
    const { values, errors, handleSubmit, handleChange } = useForm();
    console.log(errors)
    return (
        <div>
            <div className={s.mainPage}>
                <Typography variant="h1">Здравствуйте, {values.fullName}!</Typography>

                <Form values={values} errors={errors} handleChange={handleChange} handleSubmit={handleSubmit}/>
            </div>
            <div>

            </div>
        </div>
    )
}