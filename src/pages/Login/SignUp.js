import { Field, Formik, ErrorMessage, Form } from "formik";
import { signUpValidator } from "../../validators/formValidator";
import { useSignUp } from "../../hooks/useAuth";
import { Link } from "react-router-dom";
export default function SignUp() {
  const { onSignUp, initialStatus } = useSignUp();
  return (
    <div className="App align-items-center justify-content-center d-flex flex-column vh-100 text-danger img">
      <h1>Movie Booking Application</h1>
      <div
        className=" p-3 m-5 shadow border"
        style={{
          width: 30 + "rem",
          borderRadius: "13px",
        }}
      >
        <Formik
          initialValues={initialStatus}
          validate={signUpValidator}
          onSubmit={onSignUp}
        >
          {({ isSubmitting }) => (
            <Form className=" align-items-center text-align-center blur">
              <h1>Sign Up</h1>
              <Field
                type="text"
                name="name"
                placeholder="enter your name"
                className="form-control m-2"
              />
              <ErrorMessage name="name" component="div" />
              <Field
                type="email"
                name="email"
                placeholder="enter your email"
                className="form-control m-2"
              />
              <ErrorMessage name="email" component="div" />
              <Field
                type="text"
                name="userId"
                placeholder="enter your userId"
                className="form-control m-2"
              />
              <ErrorMessage name="userId" component="div" />
              <Field
                type="password"
                name="password"
                placeholder="enter your password"
                className="form-control m-2"
              />
              <ErrorMessage name="password" component="div" />
              <Field
                as="select"
                name="userTypes"
                className=" justify-content-center p-2 mb-2"
              >
                <option value="ADMIN">ADMIN</option>
                <option value="CUSTOMER">CUSTOMER</option>
                <option value="CLIENT">CLIENT</option>
              </Field>
              <button
                type="submit"
                className="form-control btn btn-danger m-2"
                disabled={isSubmitting}
              >
                Sign Up
              </button>
              <hr />
              <Link
                to="/login"
                className="text-success text-center"
                style={{ textDecoration: "none" }}
              >
                <p> Already have an account ? Login</p>
              </Link>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
