import { AuthProvider } from "../context/AuthContext";
import Layout from "../components/Layout";
import { CssBaseline } from "@mui/material";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <AuthProvider>
      <CssBaseline />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AuthProvider>
  );
}
