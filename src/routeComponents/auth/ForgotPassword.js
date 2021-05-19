import { useState } from "react";

import './ForgotPassword.css'
import api from "../../apis/index";
import background from '../../components/images/backgroundanis/background-signup-01.png'

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState({ error: false, text: "" });

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const response = await api.post("/forgot-password", { email });

      console.log(response);

      setMessage({
        text: "Please check your inbox for the password reset link.",
        error: false,
      });
    } catch (err) {
      console.error(err);
      setMessage({
        text: "Sorry, we couldn't reset your password.",
        error: true,
      });
    }
  }

  return (
  <div className="forgot">
  <img src={background} alt="background" class="bg" />
    <form onSubmit={handleSubmit}>
      <h1>Forgot your password?</h1>

      <small>Type your e-mail below to receive an password reset link.</small>

      <div className="form-group mt-4">
        <label htmlFor="forgotPasswordEmail">E-mail</label>
        <input
          id="forgotPasswordEmail"
          className="form-control"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>

      <button type="submit" className="btn btn-primary" style={{"minWidth": "100px"}}>
        Reset Password
      </button>

      {message.text ? (
        <div
          className={`alert alert-${message.error ? "danger" : "success"}`}
          role="alert"
        >
          {message.text}
        </div>
      ) : null}
    </form>
    </div>
  );
}

export default ForgotPassword;
