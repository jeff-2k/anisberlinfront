import { Link, useHistory } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import api from "../../apis/index";

import InputFeedback from "../../components/InputFeedback";

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .required("Required field")
    .max(50, "Name should be 50 characters max"),
  email: Yup.string().email("Not a valid e-mail").required("Required field"),
  password: Yup.string()
    .matches(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
      "Must have at least 8 characters, uppercase and lowercase letters, numbers and special characters."
    )
    .required("Required field"),
  phoneNumber: Yup.string().matches(
    /(\(?\d{2}\)?\s)?(\d{4,5}\-\d{4})/,
    "Invalid phone number"
  ),
  AddressStreet: Yup.string().required("Required field"),
  neighbourhood: Yup.string().required("Required Field"),
  AddressCity: Yup.string().required("Required Field"),
  AddressPostalCode: Yup.string().max(9, "Invalid post code").required("Required Field"),
  AddressState: Yup.string().required("Required Field"),
  AddressCountry: Yup.string().required("Required Field"),
});

function Signup() {
  // O useState retorna uma array que sempre tem 2 elementos: o índice 0 sendo o seu state (que não precisa mais ser somente um objeto), e o índice 1 sendo uma função para atualizar esse state
  // const [state, setState] = useState({
  //   name: "",
  //   email: "",
  //   password: "",
  //   phoneNumber: "",
  // });
  // const [address, setAddress] = useState({
  //   street: "",
  //   neighbourhood: "",
  //   city: "",
  //   postCode: "",
  //   stateOrProvince: "",
  //   country: "",
  // });

  const history = useHistory();

  // function handleStateChange(event) {
  //   // a função de atualização de state dos Hooks é destrutiva, ou seja, sobrescreve o state pelo que vc mandar. Para salvar o state atual antes da atualização, utilize o operador spread:
  //   setState({ ...state, [event.target.name]: event.target.value });
  // }

  // function handleAddressChange(event) {
  //   setAddress({ ...address, [event.target.name]: event.target.value });
  // }

  // async function handleSubmit(event) {
  //   try {
  //     event.preventDefault();

  //     const response = await api.post("/signup", {
  //       ...state,
  //       address: { ...address },
  //     });

  //     console.log(response);

  //     history.push("/login");
  //   } catch (err) {
  //     console.error(err);
  //   }
  // }

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
        AddressCountry: "",
        AddressState: "",
        AddressPostalCode: "",
        AddressCity: "",
        AddressNum: "",
        AddressStreet: "",
        phoneNumber: "",
        neighbourhood: "",
      }}
      validationSchema={SignupSchema}
      onSubmit={async (values, { setSubmitting }) => {
        setSubmitting(true);


        try {
          const response = await api.post("/signup", {
            ...values,             
          });

          console.log(response);

          setSubmitting(false);

          history.push("/login");
        } catch (err) {
          console.error(err);
          setSubmitting(false);
        }
      }}
    >
      {({ isSubmitting, errors, touched }) => (
        <Form>
          <h1>Signup </h1>
          <h2 className="mt-3">Personal Info</h2>
          <hr />

          <div className="form-group">
            <label htmlFor="signupFormEmail">Email address</label>
            <Field
              type="email"
              className={`form-control ${
                errors.email && touched.email ? "is-invalid" : "is-valid"
              }`}
              id="signupFormEmail"
              aria-describedby="emailHelp"
              name="email"
            />
            <ErrorMessage
              name="email"
              render={(msg) => (
                <InputFeedback invalid={errors.email && touched.email}>
                  {msg}
                </InputFeedback>
              )}
            />
            {errors.email && touched.email ? null : (
              <small id="emailHelp" className="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="signupFormPassword">Password</label>
            <Field
              type="password"
              className={`form-control ${
                errors.password && touched.password ? "is-invalid" : "is-valid"
              }`}
              id="signupFormPassword"
              name="password"
            />
            <ErrorMessage
              name="password"
              render={(msg) => (
                <InputFeedback invalid={errors.password && touched.password}>
                  {msg}
                </InputFeedback>
              )}
            />
          </div>

          <div className="form-group">
            <label htmlFor="signupFormName">Full Name</label>
            <Field
              type="text"
              className={`form-control ${
                errors.name && touched.name ? "is-invalid" : "is-valid"
              }`}
              id="signupFormName"
              name="name"
            />
            <ErrorMessage
              name="name"
              render={(msg) => (
                <InputFeedback invalid={errors.name && touched.name}>
                  {msg}
                </InputFeedback>
              )}
            />
          </div>

          <div className="form-group">
            <label htmlFor="signupFormName">House Number</label>
            <Field
              type="text"
              className={`form-control ${
                errors.AddressNum && touched.AddressNum ? "is-invalid" : "is-valid"
              }`}
              id="signupFormName"
              name="AddressNum"
            />
            <ErrorMessage
              name="AddressNum"
              render={(msg) => (
                <InputFeedback invalid={errors.AddressNum && touched.AddressNum}>
                  {msg}
                </InputFeedback>
              )}
            />
          </div>

          <div className="form-group">
            <label htmlFor="signupFormPhoneNumber">Phone Number</label>
            <Field
              type="text"
              className={`form-control ${
                errors.phoneNumber && touched.phoneNumber
                  ? "is-invalid"
                  : "is-valid"
              }`}
              id="signupFormPhoneNumber"
              name="phoneNumber"
            />
            <ErrorMessage
              name="phoneNumber"
              render={(msg) => (
                <InputFeedback
                  invalid={errors.phoneNumber && touched.phoneNumber}
                >
                  {msg}
                </InputFeedback>
              )}
            />
          </div>

          <h2 className="mt-3">Address Info</h2>
          <hr />

          <div className="form-group">
            <label htmlFor="signupFormPostCode">Post Code</label>
            <Field
              type="text"
              className={`form-control ${
                errors.AddressPostalCode && touched.AddressPostalCode ? "is-invalid" : "is-valid"
              }`}
              id="signupFormPostCode"
              name="AddressPostalCode"
            />
            <ErrorMessage
              name="AddressPostalCode"
              render={(msg) => (
                <InputFeedback invalid={errors.AddressPostalCode && touched.AddressPostalCode}>
                  {msg}
                </InputFeedback>
              )}
            />
          </div>

          <div className="form-group">
            <label htmlFor="signupFormStreet">Street Name</label>
            <Field
              type="text"
              className={`form-control ${
                errors.AddressStreet && touched.AddressStreet ? "is-invalid" : "is-valid"
              }`}
              id="signupFormStreet"
              name="AddressStreet"
            />
            <ErrorMessage
              name="AddressStreet"
              render={(msg) => (
                <InputFeedback invalid={errors.AddressStreet && touched.AddressStreet}>
                  {msg}
                </InputFeedback>
              )}
            />
          </div>

          <div className="form-group">
            <label htmlFor="signupFormNeighbourhood">Neighbourhood</label>
            <Field
              type="text"
              className={`form-control ${
                errors.neighbourhood && touched.neighbourhood
                  ? "is-invalid"
                  : "is-valid"
              }`}
              id="signupFormNeighbourhood"
              name="neighbourhood"
            />
            <ErrorMessage
              name="neighbourhood"
              render={(msg) => (
                <InputFeedback
                  invalid={errors.neighbourhood && touched.neighbourhood}
                >
                  {msg}
                </InputFeedback>
              )}
            />
          </div>

          <div className="form-group">
            <label htmlFor="signupFormCity">City</label>
            <Field
              type="text"
              className={`form-control ${
                errors.AddressCity && touched.AddressCity ? "is-invalid" : "is-valid"
              }`}
              id="signupFormCity"
              name="AddressCity"
            />
            <ErrorMessage
              name="AddressCity"
              render={(msg) => (
                <InputFeedback invalid={errors.AddressCity && touched.AddressCity}>
                  {msg}
                </InputFeedback>
              )}
            />
          </div>

          <div className="form-group">
            <label htmlFor="signupFormState">State or Province</label>
            <Field
              type="text"
              className={`form-control ${
                errors.AddressState && touched.AddressState
                  ? "is-invalid"
                  : "is-valid"
              }`}
              id="signupFormState"
              name="AddressState"
            />
            <ErrorMessage
              name="AddressState"
              render={(msg) => (
                <InputFeedback
                  invalid={errors.AddressState && touched.AddressState}
                >
                  {msg}
                </InputFeedback>
              )}
            />
          </div>

          <div className="form-group">
            <label htmlFor="signupFormCountry">Country</label>
            <Field
              type="text"
              className={`form-control ${
                errors.AddressCountry && touched.AddressCountry
                  ? "is-invalid"
                  : !errors.AddressCountry && touched.AddressCountry
                  ? "is-valid"
                  : ""
              }`}
              id="signupFormCountry"
              name="AddressCountry"
            />
            <ErrorMessage
              name="AddressCountry"
              render={(msg) => (
                <InputFeedback invalid={errors.AddressCountry && touched.AddressCountry}>
                  {msg}
                </InputFeedback>
              )}
            />
          </div>

          <hr />
          <button
            type="submit"
            className="btn btn-primary"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <span
                  class="spinner-border spinner-border-sm"
                  role="status"
                  aria-hidden="true"
                ></span>
                <span>Submitting</span>
              </>
            ) : (
              <span>Submit</span>
            )}
          </button>

          <div className="mt-4">
            <Link to="/login">Already have an account? Sign-in here!</Link>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default Signup;
