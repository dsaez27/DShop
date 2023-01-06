import { Formik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { ButtonGroup, Container, InputGroup, Input, Title } from "../styled";
import { Agreement, Form, FormContainer, Login, Submit } from "./styled";
import { FloatingLabelTextInput } from "@/components/input/Input";
import { register } from "@/features/user/userSlice";

export const Register = () => {
    const dispatch = useDispatch();

    const formSchema = Yup.object().shape({
        firstname: Yup.string()
            .min(2, "First name must be at least 2 characters long")
            .required("First name is required"),
        lastname: Yup.string()
            .min(2, "Last name must be at least 2 characters long")
            .required("Last name is required"),
        email: Yup.string()
            .email("Email is not valid")
            .required("Email is required"),
        password: Yup.string()
            .min(6, "Password must be at least 6 characters long")
            .required("Password is required"),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref("password"), null], "Passwords must match")
            .required("Confirm Password is required"),
        phone: Yup.string()
            .min(10, "Phone number must be at least 10 characters long")
            .required("Phone number is required"),
        address: Yup.string()
            .min(10, "Address must be at least 10 characters long")
            .required("Address is required"),
    });

    return (
        <Container className="full__bleed">
            <Formik
                validationSchema={formSchema}
                initialValues={{
                    firstname: "",
                    lastname: "",
                    email: "",
                    password: "",
                    phone: "",
                    address: "",
                    confirmPassword: "",
                }}
                onSubmit={(values) => dispatch(register(values))}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                }) => (
                    <FormContainer>
                        <Title> CREATE AN ACCOUNT</Title>
                        <Form onSubmit={handleSubmit}>
                            <InputGroup>
                                <FloatingLabelTextInput
                                    id="firstname"
                                    type="text"
                                    placeholder="First Name"
                                    name="firstname"
                                    autoComplete="off"
                                    value={values.firstname}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {errors.firstname && touched.firstname && (
                                    <p className="error">{errors.firstname}</p>
                                )}
                                <FloatingLabelTextInput
                                    id="lastname"
                                    type="text"
                                    placeholder="Last Name"
                                    name="lastname"
                                    autoComplete="off"
                                    value={values.lastname}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {errors.lastname && touched.lastname && (
                                    <p className="error">{errors.lastname}</p>
                                )}

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
                                <FloatingLabelTextInput
                                    id="phone"
                                    type="text"
                                    placeholder="Phone"
                                    name="phone"
                                    autoComplete="off"
                                    value={values.phone}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {errors.phone && touched.phone && (
                                    <p className="error">{errors.phone}</p>
                                )}

                                <FloatingLabelTextInput
                                    id="address"
                                    type="text"
                                    placeholder="Address"
                                    name="address"
                                    autoComplete="off"
                                    value={values.address}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {errors.address && touched.address && (
                                    <p className="error">{errors.address}</p>
                                )}

                                <FloatingLabelTextInput
                                    id="password"
                                    type="password"
                                    placeholder="Password"
                                    name="password"
                                    autoComplete="off"
                                    value={values.password}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {errors.password && touched.password && (
                                    <p className="error">{errors.password}</p>
                                )}
                                <FloatingLabelTextInput
                                    id="confirmPassword"
                                    type="password"
                                    placeholder="Confirm Password"
                                    name="confirmPassword"
                                    autoComplete="off"
                                    value={values.confirmPassword}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {errors.confirmPassword &&
                                    touched.confirmPassword && (
                                        <p className="error">
                                            {errors.confirmPassword}
                                        </p>
                                    )}
                            </InputGroup>
                            <Agreement>
                                By creating an account, I consent to the
                                processing of my personal data in accordance
                                with the
                                <b> PRIVACY POLICY</b>
                            </Agreement>
                            <ButtonGroup>
                                <Submit type="submit">Create account</Submit>
                                <Login to="/login">← Back to login</Login>
                            </ButtonGroup>
                        </Form>
                    </FormContainer>
                )}
            </Formik>
        </Container>
    );
};
