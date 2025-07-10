import { Card, CardContent, Typography, Button, Stack } from "@mui/material";
import Link from "next/link";

export default function CitaCard({ cita, editable, onEliminar }) {
  return (
    <Card sx={{ mb: 2 }}>
      <CardContent>
        <Typography variant="h6">Mascota: {cita.mascota}</Typography>
        <Typography variant="body2">Fecha: {cita.fecha}</Typography>
        <Typography variant="body2">Hora: {cita.hora}</Typography>
        <Typography variant="body2">Motivo: {cita.motivo}</Typography>
        <Typography variant="body2">Veterinario: {cita.veterinario}</Typography>
        <Typography variant="body2">Estado: {cita.estado}</Typography>

        {editable && (
          <Stack direction="row" spacing={1} sx={{ mt: 2 }}>
            <Link href={`/citas/editar/${cita.id}`} passHref>
              <Button size="small" variant="outlined" color="primary">Editar</Button>
            </Link>
            <Button
              size="small"
              variant="outlined"
              color="error"
              onClick={() => onEliminar && onEliminar(cita.id)}
            >
              Eliminar
            </Button>
          </Stack>
        )}
      </CardContent>
    </Card>
  );
}
