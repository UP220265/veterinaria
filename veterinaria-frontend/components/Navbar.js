import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import Link from "next/link";

export default function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>Veterinaria</Typography>
        <Link href="/clientes" passHref><Button color="inherit">Clientes</Button></Link>
        <Link href="/mascotas" passHref><Button color="inherit">Mascotas</Button></Link>
        <Link href="/citas" passHref><Button color="inherit">Citas</Button></Link>
      </Toolbar>
    </AppBar>
  );
}
