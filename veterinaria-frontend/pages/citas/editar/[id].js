import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { TextField, Button, Box, Typography, MenuItem } from "@mui/material";
import { useEffect } from "react";
import RouteGuard from "../../../components/RouteGuard";

// Simulación: datos temporales
const citasSimuladas = [
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

export default function EditarCita() {
  const router = useRouter();
  const { id } = router.query;

  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    if (id) {
      const cita = citasSimuladas.find((c) => c.id === parseInt(id));
      if (cita) {
        reset(cita);
      } else {
        alert("Cita no encontrada");
        router.push("/citas");
      }
    }
  }, [id]);

  const onSubmit = (data) => {
    console.log("Cita actualizada:", data);
    alert("Cita actualizada correctamente (simulado)");
    router.push("/citas");
  };

  return (
    <RouteGuard rolPermitido="Recepcionista">
      <Box sx={{ maxWidth: 500, mx: "auto", mt: 5 }}>
        <Typography variant="h5" gutterBottom>Editar Cita</Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* campos aquí */}
        </form>
      </Box>
    </RouteGuard>
  );
}
