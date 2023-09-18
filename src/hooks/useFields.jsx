import { useState } from "react";

export default function useFields(initalState) {
  const [formData, setFormData] = useState(initalState);

  function handleField(e) {
    const { name, value } = e.target;
    setFormData((current) => ({ ...current, [name]: value }));
  }

  return [formData, handleField];
}
