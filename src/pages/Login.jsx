import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import Input from "../components/Input";
import Button from "../components/Button";
import Alert from "../components/Alert";

import useFields from "../hooks/useFields";

import { useAuth } from "../context/AuthContext";

export default function Login() {
  const [formData, handleField] = useFields({
    email: "",
    password: "",
  });

  const [error, setError] = useState(null);

  const { handleLogin } = useAuth();

  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await handleLogin(formData);
      // redirect to /admin
      navigate("/admin");
    } catch (error) {
      setError(error.response.data);
    }
  }

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold text-center">
        Welcome into this app
      </h1>
      <form className="flex flex-col gap-y-4" onSubmit={handleSubmit}>
        <Input
          type="email"
          name="email"
          placeholder="Inserisci email"
          value={formData.email}
          onChange={handleField}
        />
        <Input
          type="password"
          name="password"
          placeholder="Inserisci password"
          value={formData.password}
          onChange={handleField}
        />
        <Button>Login</Button>
        {error && <Alert>{error}</Alert>}
      </form>
      <div className="text-center">
        or <br />
        <Link
          className="text-blue-700 underline underline-offset-2"
          to="/sign-up"
        >
          Create a new account
        </Link>
        <br />
        <Link
          className="text-blue-700 underline underline-offset-2"
          to="/request-reset-password"
        >
          Reset Password
        </Link>
      </div>
    </div>
  );
}
