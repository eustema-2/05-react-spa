import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import client from "../api/client";
import FileConverter from "../components/FileConverter";

export default function HomePage() {
  const { user } = useAuth();

  useEffect(() => {
    client.get(`${user.id}`).then((response) => {
      console.log(response.data);
    });
  }, [user]);

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Home Page</h1>
      <p>Benvenuto {user.name}</p>
      <FileConverter />
    </div>
  );
}
