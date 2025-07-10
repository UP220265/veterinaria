import { useForm } from "react-hook-form";
import { TextField, Button, Box, Typography } from "@mui/material";
import { useAuth } from "../context/AuthContext";
import { useRouter } from "next/router";

export default function Login() {
  const { register, handleSubmit } = useForm();
  const { login } = useAuth();
  const router = useRouter();

  const onSubmit = (data) => {
    const acceso = login(data.usuario, data.contraseña);
    if (acceso) {
      router.push("/dashboard");
    } else {
      alert("Usuario o contraseña incorrectos");
    }
  };

  return (
    <Box sx={{ maxWidth: 400, mx: "auto", mt: 10 }}>
      <Typography variant="h5" gutterBottom>Iniciar Sesión</Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField label="Usuario" fullWidth {...register("usuario")} margin="normal" />
        <TextField label="Contraseña" type="password" fullWidth {...register("contraseña")} margin="normal" />
        <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>Ingresar</Button>
      </form>
    </Box>
  );
}
