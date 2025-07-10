import { Box, Typography, Button } from "@mui/material";
import Link from "next/link";
import ClienteCard from "../../components/ClienteCard";

// Datos simulados por ahora
const clientesPrueba = [
  {
    id: 1,
    nombre: "Juan",
    apellido: "Pérez",
    telefono: "4491234567",
    email: "juan.perez@gmail.com",
    direccion: "Calle 1 #123, Aguascalientes"
  },
  {
    id: 2,
    nombre: "Ana",
    apellido: "Ramírez",
    telefono: "4497654321",
    email: "ana.ramirez@hotmail.com",
    direccion: "Av. Reforma #456, Aguascalientes"
  },
];

export default function ListaClientes() {
  return (
    <Box sx={{ maxWidth: 600, mx: "auto", mt: 5 }}>
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
        <Typography variant="h5">Lista de Clientes</Typography>
        <Link href="/clientes/nuevo" passHref>
          <Button variant="contained">Nuevo Cliente</Button>
        </Link>
      </Box>
      {clientesPrueba.map((cliente) => (
        <ClienteCard key={cliente.id} cliente={cliente} />
      ))}
    </Box>
  );
}
