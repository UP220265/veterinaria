import { Box, Typography, Button } from "@mui/material";
import Link from "next/link";
import MascotaCard from "../../components/MascotaCard";

// Datos simulados
const mascotasPrueba = [
  {
    id: 1,
    nombre: "Firulais",
    especie: "Perro",
    raza: "Doberman",
    color: "Negro",
    sexo: "Macho",
    pesoKg: 25.4,
    nombreCliente: "Juan Pérez"
  },
  {
    id: 2,
    nombre: "Mishi",
    especie: "Gato",
    raza: "Persa",
    color: "Blanco",
    sexo: "Hembra",
    pesoKg: 4.2,
    nombreCliente: "Ana Ramírez"
  }
];

export default function ListaMascotas() {
  return (
    <Box sx={{ maxWidth: 600, mx: "auto", mt: 5 }}>
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
        <Typography variant="h5">Lista de Mascotas</Typography>
        <Link href="/mascotas/nueva" passHref>
          <Button variant="contained">Nueva Mascota</Button>
        </Link>
      </Box>
      {mascotasPrueba.map((m) => (
        <MascotaCard key={m.id} mascota={m} />
      ))}
    </Box>
  );
}
