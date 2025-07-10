import { Box, Typography, List, ListItem, ListItemText, Paper, Button } from "@mui/material";
import Link from "next/link";

const clientesPrueba = [
  { id: 1, nombre: "Juan", apellido: "Pérez", telefono: "4491234567" },
  { id: 2, nombre: "Ana", apellido: "Ramírez", telefono: "4497654321" },
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
      <Paper>
        <List>
          {clientesPrueba.map((cliente) => (
            <ListItem key={cliente.id} divider>
              <ListItemText
                primary={`${cliente.nombre} ${cliente.apellido}`}
                secondary={`Tel: ${cliente.telefono}`}
              />
            </ListItem>
          ))}
        </List>
      </Paper>
    </Box>
  );
}
