import { useForm } from "react-hook-form";
import { TextField, Button, Box, Typography, MenuItem } from "@mui/material";

export default function NuevaCita() {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log("Cita registrada:", data);
    alert("Cita registrada (aún no se guarda en base de datos)");
    reset();
  };

  return (
    <Box sx={{ maxWidth: 500, mx: "auto", mt: 5 }}>
      <Typography variant="h5" gutterBottom>Agendar Nueva Cita</Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField fullWidth label="Nombre de la Mascota" {...register("mascota")} margin="normal" />
        <TextField fullWidth label="Veterinario" {...register("veterinario")} margin="normal" />
        <TextField fullWidth label="Motivo" {...register("motivo")} margin="normal" />
        <TextField fullWidth type="date" {...register("fecha")} margin="normal" InputLabelProps={{ shrink: true }} />
        <TextField fullWidth type="time" {...register("hora")} margin="normal" InputLabelProps={{ shrink: true }} />
        <TextField fullWidth select label="Estado" {...register("estado")} margin="normal">
          <MenuItem value="Pendiente">Pendiente</MenuItem>
          <MenuItem value="Confirmada">Confirmada</MenuItem>
          <MenuItem value="Cancelada">Cancelada</MenuItem>
          <MenuItem value="Realizada">Realizada</MenuItem>
        </TextField>
        <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>Agendar</Button>
      </form>
    </Box>
  );
}
