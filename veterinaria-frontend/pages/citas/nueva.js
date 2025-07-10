import RouteGuard from "../../components/RouteGuard";
import { useForm } from "react-hook-form";
import { TextField, Button, Box, Typography, MenuItem } from "@mui/material";

export default function NuevaCita() {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log("Cita registrada:", data);
    alert("Cita registrada (simulada)");
    reset();
  };

  return (
    <RouteGuard rolPermitido="Recepcionista">
      <Box sx={{ maxWidth: 500, mx: "auto", mt: 5 }}>
        <Typography variant="h5" gutterBottom>Agendar Nueva Cita</Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField label="Mascota" fullWidth {...register("mascota")} margin="normal" />
          <TextField label="Veterinario" fullWidth {...register("veterinario")} margin="normal" />
          <TextField label="Motivo" fullWidth {...register("motivo")} margin="normal" />
          <TextField type="date" fullWidth {...register("fecha")} margin="normal" InputLabelProps={{ shrink: true }} />
          <TextField type="time" fullWidth {...register("hora")} margin="normal" InputLabelProps={{ shrink: true }} />
          <TextField select label="Estado" fullWidth {...register("estado")} margin="normal">
            <MenuItem value="Pendiente">Pendiente</MenuItem>
            <MenuItem value="Confirmada">Confirmada</MenuItem>
            <MenuItem value="Cancelada">Cancelada</MenuItem>
            <MenuItem value="Realizada">Realizada</MenuItem>
          </TextField>
          <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>Agendar</Button>
        </form>
      </Box>
    </RouteGuard>
  );
}
