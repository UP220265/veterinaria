import { Box, Typography, Button } from "@mui/material";
import Link from "next/link";
import CitaCard from "../../components/CitaCard";
import { useAuth } from "../../context/AuthContext";
import { useState } from "react";

// Datos simulados iniciales
const citasIniciales = [
  {
    id: 1,
    fecha: "2025-07-15",
    hora: "10:30",
    motivo: "Vacunación anual",
    mascota: "Firulais",
    veterinario: "vetcarlos",
    estado: "Pendiente"
  },
  {
    id: 2,
    fecha: "2025-07-20",
    hora: "14:00",
    motivo: "Chequeo general",
    mascota: "Mishi",
    veterinario: "vetcarlos",
    estado: "Confirmada"
  }
];

export default function ListaCitas() {
  const { usuarioActual } = useAuth();
  const [citas, setCitas] = useState(citasIniciales);

  if (!usuarioActual) {
    return <Typography variant="h6" sx={{ mt: 5, textAlign: "center" }}>Inicia sesión para ver tus citas</Typography>;
  }

  const citasFiltradas = usuarioActual.rol === "Veterinario"
    ? citas.filter(cita => cita.veterinario === usuarioActual.usuario)
    : citas;

  const eliminarCita = (id) => {
    const confirm = window.confirm("¿Estás seguro de eliminar esta cita?");
    if (confirm) {
      setCitas((prev) => prev.filter((cita) => cita.id !== id));
    }
  };

  return (
    <Box sx={{ maxWidth: 700, mx: "auto", mt: 5 }}>
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
        <Typography variant="h5">Citas Agendadas</Typography>
        {usuarioActual.rol === "Recepcionista" && (
          <Link href="/citas/nueva" passHref>
            <Button variant="contained">Nueva Cita</Button>
          </Link>
        )}
      </Box>

      {citasFiltradas.length === 0 ? (
        <Typography>No hay citas registradas.</Typography>
      ) : (
        citasFiltradas.map((cita) => (
          <CitaCard
            key={cita.id}
            cita={cita}
            editable={usuarioActual.rol === "Recepcionista"}
            onEliminar={eliminarCita}
          />
        ))
      )}
    </Box>
  );
}
