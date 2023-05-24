import Layout from "./components/Layout";
import { Navigate, Route, Routes } from "react-router-dom";
import Applications from "./pages/Applications";
import Resources from "./pages/Resources";

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate to="/applications" replace />} />
        <Route path="/applications" element={<Applications />} />
        <Route path="/resources" element={<Resources />} />
      </Routes>
    </Layout>
  );
}
