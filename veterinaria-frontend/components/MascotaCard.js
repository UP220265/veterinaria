import { Card, CardContent, Typography } from "@mui/material";

export default function MascotaCard({ mascota }) {
  return (
    <Card sx={{ mb: 2 }}>
      <CardContent>
        <Typography variant="h6">{mascota.nombre}</Typography>
        <Typography variant="body2">Especie: {mascota.especie}</Typography>
        <Typography variant="body2">Raza: {mascota.raza}</Typography>
        <Typography variant="body2">Color: {mascota.color}</Typography>
        <Typography variant="body2">Sexo: {mascota.sexo}</Typography>
        <Typography variant="body2">Peso: {mascota.pesoKg} kg</Typography>
        <Typography variant="body2">Dueño: {mascota.nombreCliente}</Typography>
      </CardContent>
    </Card>
  );
}
