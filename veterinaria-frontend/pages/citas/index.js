import { Box, Typography, Button } from "@mui/material";
import Link from "next/link";
import CitaCard from "../../components/CitaCard";

// Datos simulados
const citasSimuladas = [
  {
    id: 1,
    fecha: "2025-07-15",
    hora: "10:30",
    motivo: "Vacunación anual",
    mascota: "Firulais",
    veterinario: "Carlos Sánchez",
    estado: "Pendiente"
  },
  {
    id: 2,
    fecha: "2025-07-20",
    hora: "14:00",
    motivo: "Chequeo general",
    mascota: "Mishi",
    veterinario: "Carlos Sánchez",
    estado: "Confirmada"
  }
];

export default function ListaCitas() {
  return (
    <Box sx={{ maxWidth: 700, mx: "auto", mt: 5 }}>
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
        <Typography variant="h5">Citas Agendadas</Typography>
        <Link href="/citas/nueva" passHref>
          <Button variant="contained">Nueva Cita</Button>
        </Link>
      </Box>
      {citasSimuladas.map((cita) => (
        <CitaCard key={cita.id} cita={cita} />
      ))}
    </Box>
  );
}
