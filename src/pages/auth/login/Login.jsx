import { Formik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { Container, Title } from "../styled";
import { Form, Reset, Register, Submit } from "./styled";
import { FloatingLabelTextInput } from "@/components/input/Input";
import { login } from "@/features/user/userSlice";

export const Login = () => {
    const dispatch = useDispatch();

    const formSchema = Yup.object().shape({
        email: Yup.string()
            .email("Email is not valid")
            .required("Email is required"),
        password: Yup.string()
            .min(6, "Password must be at least 6 characters long")
            .required("Password is required"),
    });

    return (
        <Container className="full__bleed">
            <Formik
                validationSchema={formSchema}
                initialValues={{
                    email: "dssh27@gmail.com",
                    password: "123456",
                }}
                onSubmit={(values) => dispatch(login(values))}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                }) => (
                    <Form onSubmit={handleSubmit}>
                        <Title>Login</Title>
                        <FloatingLabelTextInput
                            id="email"
                            type="text"
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
                        <FloatingLabelTextInput
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Password"
                            autoComplete="off"
                            value={values.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            required
                        />
                        {errors.password && touched.password && (
                            <p className="error">{errors.password}</p>
                        )}
                        <Submit type="submit">Login</Submit>
                        <Reset to="/forgot">Do you forget your password?</Reset>
                        <Register to="/register">
                            Don't have an account? Register
                        </Register>
                    </Form>
                )}
            </Formik>
        </Container>
    );
};
