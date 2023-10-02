import { useState } from "react";
import { Link } from "react-router-dom";

import auth from "../api/auth";

import Input from "../components/Input";
import Button from "../components/Button";
import Alert from "../components/Alert";
import Success from "../components/Success";

import useFields from "../hooks/useFields";

export default function RequestResetPassword() {
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState("");

  const [formData, handleField] = useFields({
    email: "",
  });

  async function handleSubmit(e) {
    e.preventDefault();
    setError(false);
    setSuccess("");
    try {
      const response = await auth.requestResetPassword(formData);
      setSuccess(response);
    } catch (error) {
      setError(error.response.data);
    }
  }

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold text-center">Reset Password</h1>
      <form className="flex flex-col gap-y-4" onSubmit={handleSubmit}>
        <Input
          type="email"
          name="email"
          placeholder="Inserisci email"
          value={formData.email}
          onChange={handleField}
        />
        <Button>Reset</Button>
        {error && !success && <Alert>{error}</Alert>}
        {success && !error && <Success>{success}</Success>}
      </form>
      <div className="text-center">
        or
        <br />
        <Link className="text-blue-700 underline underline-offset-2" to="/">
          Login Page
        </Link>
        <br />
        <Link
          className="text-blue-700 underline underline-offset-2"
          to="/sign-up"
        >
          Create a new account
        </Link>
      </div>
    </div>
  );
}
