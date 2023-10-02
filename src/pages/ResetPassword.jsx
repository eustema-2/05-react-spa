import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

import auth from "../api/auth";

import Input from "../components/Input";
import Button from "../components/Button";
import Alert from "../components/Alert";
import Success from "../components/Success";

import useFields from "../hooks/useFields";

export default function Login() {
  const [formData, handleField] = useFields({
    password: "",
    passwordConfirm: "",
  });

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState("");

  const [searchParams] = useSearchParams();

  const token = searchParams.get("token");

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await auth.confirmResetPassword({
        ...formData,
        token,
      });
      setSuccess(response);
    } catch (error) {
      setError(error.response.data);
    }
  }

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold text-center">
        Create new credentials
      </h1>
      <form className="flex flex-col gap-y-4" onSubmit={handleSubmit}>
        <Input
          type="password"
          name="password"
          placeholder="Inserisci password"
          value={formData.password}
          onChange={handleField}
        />
        <Input
          type="password"
          name="passwordConfirm"
          placeholder="Inserisci nuovamente la password"
          value={formData.passwordConfirm}
          onChange={handleField}
        />
        <Button>Confirm Reset</Button>
        {error && !success && <Alert>{error}</Alert>}
        {success && !error && <Success>{success}</Success>}
      </form>
      <div className="text-center">
        or <br />
        <Link className="text-blue-700 underline underline-offset-2" to="/">
          Login
        </Link>
      </div>
    </div>
  );
}
