import { Link } from "react-router-dom";

import Input from "../components/Input";
import Button from "../components/Button";

import useFields from "../hooks/useFields";

export default function Login() {
  const [formData, handleField] = useFields({
    email: "",
    password: "",
    passwordConfirm: "",
  });

  function handleSubmit(e) {
    e.preventDefault();

    console.log(formData);
  }

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold text-center">Create new account</h1>
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
        <Input
          type="password"
          name="passwordConfirm"
          placeholder="Inserisci password"
          value={formData.passwordConfirm}
          onChange={handleField}
        />
        <Button>Create</Button>
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
