import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

import Input from "../components/Input";
import Button from "../components/Button";
import Alert from "../components/Alert";

import useFields from "../hooks/useFields";

export default function Login() {
  const [formData, handleField] = useFields({
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const [error, setError] = useState(null);

  const { handleCreateAccount } = useAuth();
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await handleCreateAccount(formData);
      // redirect to /admin
      navigate("/admin");
    } catch (error) {
      console.log(error);
      setError(error.response.data);
    }
  }

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold text-center">Create new account</h1>
      <form className="flex flex-col gap-y-4" onSubmit={handleSubmit}>
        <Input
          type="text"
          name="name"
          placeholder="Inserisci nome"
          value={formData.name}
          onChange={handleField}
        />
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
        <Input
          type="password"
          name="passwordConfirm"
          placeholder="Inserisci nuovamente la password"
          value={formData.passwordConfirm}
          onChange={handleField}
        />
        <Button>Create</Button>
        {error && <Alert>{error}</Alert>}
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
