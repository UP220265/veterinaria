import { Card, CardContent, Typography } from "@mui/material";

export default function ClienteCard({ cliente }) {
  return (
    <Card sx={{ mb: 2 }}>
      <CardContent>
        <Typography variant="h6">
          {cliente.nombre} {cliente.apellido}
        </Typography>
        <Typography variant="body2">Teléfono: {cliente.telefono}</Typography>
        <Typography variant="body2">Email: {cliente.email}</Typography>
        <Typography variant="body2">Dirección: {cliente.direccion}</Typography>
      </CardContent>
    </Card>
  );
}
