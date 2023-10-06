import { useState, useRef } from "react";

import Input from "./Input";
import Button from "./Button";

import converter from "../api/converter";

export default function FileConverter() {
  const [file, setFile] = useState(null);
  const [files, setFiles] = useState([]);
  const form = useRef();

  function handleFileChange(e) {
    setFile(e.target.files[0]);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    // aggiungere il file al payload da inviare al BE
    const formData = new FormData();
    formData.append("file", file);
    try {
      // inviare la richiesta al BE
      const data = await converter.upload(formData);
      setFiles((files) => [...files, data]);
      form.current.reset();
      setFile(null);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="flex gap-x-6">
      <div className="w-1/3 bg-white p-8 shadow rounded-md space-y-4">
        <h2 className="text-2xl font-bold">Carica il file da convertire</h2>
        <form ref={form} className="space-y-3" onSubmit={handleSubmit}>
          <Input name="file" type="file" onChange={handleFileChange} required />
          <Button>Carica</Button>
        </form>
      </div>
      <div className="w-2/3 bg-white p-8 shadow rounded-md space-y-4">
        <h2 className="text-2xl font-bold">Documenti Convertiti</h2>
        {files.map((file) => (
          <a
            key={file.filename}
            className="flex gap-x-2 items-center hover:text-blue-600 cursor-pointer border-b py-2"
            href={`http://localhost/converter${file.link}`}
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/PDF_file_icon.svg/833px-PDF_file_icon.svg.png"
              width={26}
            />
            {file.filename}
          </a>
        ))}
      </div>
    </div>
  );
}
