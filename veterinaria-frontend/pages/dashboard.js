import { useAuth } from "../context/AuthContext";
import { Typography, Button, Box } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Dashboard() {
  const { usuarioActual, logout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!usuarioActual) {
      router.push("/");
    }
  }, [usuarioActual]);

  return usuarioActual ? (
    <Box sx={{ mt: 5, textAlign: "center" }}>
      <Typography variant="h5">Bienvenido, {usuarioActual.usuario}</Typography>
      <Typography variant="subtitle1">Rol: {usuarioActual.rol}</Typography>
      <Button onClick={() => { logout(); router.push("/"); }} sx={{ mt: 2 }} variant="outlined">Cerrar Sesión</Button>
    </Box>
  ) : null;
}
