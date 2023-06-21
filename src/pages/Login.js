import { Field, Formik, ErrorMessage, Form } from "formik";
import { formValidator } from "../validators/formValidator";
import { useAuth } from "../hooks/useAuth";
export default function Login() {
  const { onlogin, initialStatus } = useAuth();
  return (
    <div className="App align-items-center justify-content-center d-flex flex-column vh-100 text-danger bg-dark">
      <h1>Movie Booking Application</h1>
      <div
        className=" card p-3 m-5 shadow"
        style={{
          width: 30 + "rem",
          backgroundColor: "rgb(223, 215, 215)",
          borderRadius: "13px",
        }} 
      > 
        <Formik
          initialValues={initialStatus}
          validate={formValidator}
          onSubmit={onlogin}
        >
          {({ isSubmitting }) => (
            <Form className=" align-items-center text-align-center">
              <h1>Log In</h1>
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
              <button
                type="submit"
                className="form-control btn btn-danger m-2"
                disabled={isSubmitting}
              >
                Log In
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
