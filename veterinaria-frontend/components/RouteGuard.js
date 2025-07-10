import { useAuth } from "../context/AuthContext";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function RouteGuard({ children, rolPermitido }) {
  const { usuarioActual } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!usuarioActual) {
      router.push("/");
    } else if (rolPermitido && usuarioActual.rol !== rolPermitido) {
      alert("No tienes permiso para acceder a esta página");
      router.push("/dashboard");
    }
  }, [usuarioActual]);

  // Mientras valida, evitar parpadeo
  if (!usuarioActual || (rolPermitido && usuarioActual.rol !== rolPermitido)) {
    return null;
  }

  return children;
}
