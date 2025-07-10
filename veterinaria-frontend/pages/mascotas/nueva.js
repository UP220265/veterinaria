import { useForm } from "react-hook-form";
import { TextField, Button, Box, Typography, MenuItem } from "@mui/material";

export default function NuevaMascota() {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log("Mascota registrada:", data);
    alert("Mascota registrada (sin backend aún)");
    reset();
  };

  return (
    <Box sx={{ maxWidth: 500, mx: "auto", mt: 5 }}>
      <Typography variant="h5" gutterBottom>Registrar Mascota</Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField label="Nombre" fullWidth {...register("nombre")} margin="normal" />
        <TextField label="Especie" select fullWidth {...register("especie")} margin="normal">
          <MenuItem value="Perro">Perro</MenuItem>
          <MenuItem value="Gato">Gato</MenuItem>
          <MenuItem value="Ave">Ave</MenuItem>
          <MenuItem value="Conejo">Conejo</MenuItem>
        </TextField>
        <TextField label="Raza" fullWidth {...register("raza")} margin="normal" />
        <TextField label="Color" fullWidth {...register("color")} margin="normal" />
        <TextField label="Sexo" select fullWidth {...register("sexo")} margin="normal">
          <MenuItem value="Macho">Macho</MenuItem>
          <MenuItem value="Hembra">Hembra</MenuItem>
        </TextField>
        <TextField label="Peso (kg)" fullWidth type="number" {...register("pesoKg")} margin="normal" />
        <TextField label="Nombre del Cliente" fullWidth {...register("nombreCliente")} margin="normal" />
        <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>Registrar</Button>
      </form>
    </Box>
  );
}
