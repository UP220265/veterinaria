import { Card, CardContent, Typography } from "@mui/material";

export default function CitaCard({ cita }) {
  return (
    <Card sx={{ mb: 2 }}>
      <CardContent>
        <Typography variant="h6">Mascota: {cita.mascota}</Typography>
        <Typography variant="body2">Fecha: {cita.fecha}</Typography>
        <Typography variant="body2">Hora: {cita.hora}</Typography>
        <Typography variant="body2">Motivo: {cita.motivo}</Typography>
        <Typography variant="body2">Veterinario: {cita.veterinario}</Typography>
        <Typography variant="body2">Estado: {cita.estado}</Typography>
      </CardContent>
    </Card>
  );
}
