import { useDispatch, useSelector } from "react-redux";
import { Container, Title, Submit, ButtonGroup } from "../styled";
import * as Yup from "yup";
import { Form, Login } from "./styled";
import { Formik } from "formik";
import { FloatingLabelTextInput } from "@/components/input/Input";

export const Forgot = () => {
    const dispatch = useDispatch();
    const { loading, error } = useSelector((state) => state.user);

    const schema = Yup.object().shape({
        email: Yup.string()
            .email("Email is not valid")
            .required("Email is required"),
    });

    return (
        <Container className="full__bleed">
            <Formik
                validationSchema={schema}
                initialValues={{
                    email: "",
                }}
                onSubmit={(values) => dispatch(userForgot(values))}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                }) => (
                    <Form noValidate onSubmit={handleSubmit}>
                        <Title>Restore password</Title>
                        <FloatingLabelTextInput
                            id="email"
                            type="email"
                            placeholder="Email"
                            name="email"
                            autoComplete="off"
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {errors.email && touched.email && (
                            <p className="error">{errors.email}</p>
                        )}
                        <Submit type="submit">Reset</Submit>
                        <ButtonGroup>
                            <Login to="/login">← BACK TO LOGIN</Login>
                        </ButtonGroup>
                    </Form>
                )}
            </Formik>
        </Container>
    );
};
