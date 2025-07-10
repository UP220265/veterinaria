import { useForm } from "react-hook-form";
import { TextField, Button, Box, Typography } from "@mui/material";

export default function NuevoCliente() {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log("Cliente registrado:", data);
    alert("Cliente registrado (sin conexión aún al backend)");
    reset();
  };

  return (
    <Box sx={{ maxWidth: 500, mx: "auto", mt: 5 }}>
      <Typography variant="h5" gutterBottom>Registrar Cliente</Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField label="Nombre" fullWidth {...register("nombre")} margin="normal" />
        <TextField label="Apellido" fullWidth {...register("apellido")} margin="normal" />
        <TextField label="Teléfono" fullWidth {...register("telefono")} margin="normal" />
        <TextField label="Email" fullWidth {...register("email")} margin="normal" />
        <TextField label="Dirección" fullWidth {...register("direccion")} margin="normal" />
        <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>Registrar</Button>
      </form>
    </Box>
  );
}
