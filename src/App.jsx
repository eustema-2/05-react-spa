import { BrowserRouter, Routes, Route } from "react-router-dom";
// Layouts
import AuthLayout from "./layouts/AuthLayout";
import DashboardLayout from "./layouts/DashboardLayout";
// Public Pages
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import RequestResetPassword from "./pages/RequestResetPassword";
import PageNotFound from "./pages/PageNotFound";
// Private Pages
import HomePage from "./pages/HomePage";
// Middlewares
import PrivatePages from "./middlewares/PrivatePages";
// Contexts
import { AuthProvider } from "./context/AuthContext";

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<AuthLayout />}>
            <Route index element={<Login />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route
              path="/request-reset-password"
              element={<RequestResetPassword />}
            />
          </Route>

          <Route
            path="/admin"
            element={
              <PrivatePages>
                <DashboardLayout />
              </PrivatePages>
            }
          >
            <Route index element={<HomePage />} />
          </Route>

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}
