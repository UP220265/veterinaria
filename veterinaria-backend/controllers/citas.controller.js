const db = require("../models/db");

exports.obtenerCitas = (req, res) => {
  const sql = `
    SELECT 
      TCitas_IdCita AS id,
      TCitas_Fecha AS fecha,
      TCitas_Hora AS hora,
      TCitas_Motivo AS motivo,
      TCitas_Observaciones AS observaciones,
      TMascotas_Nombre AS mascota,
      TEmpleados_Nombre AS veterinario,
      CEstadoCita_Descripcion AS estado
    FROM T_CITAS
    JOIN T_MASCOTAS ON T_CITAS.TCitas_IdMascota = T_MASCOTAS.TMascotas_IdMascota
    JOIN T_VETERINARIOS ON T_CITAS.TCitas_IdVeterinario = T_VETERINARIOS.TVeterinarios_IdVeterinario
    JOIN T_EMPLEADOS ON T_VETERINARIOS.TVeterinarios_IdVeterinario = T_EMPLEADOS.TEmpleados_IdEmpleado
    JOIN C_ESTADOCITA ON T_CITAS.TCitas_IdEstado = C_ESTADOCITA.CEstadoCita_IdEstado
  `;
  db.query(sql, (err, rows) => {
    if (err) return res.status(500).json({ error: err });
    res.json(rows);
  });
};

exports.crearCita = (req, res) => {
  const { fecha, hora, motivo, observaciones, idMascota, idVeterinario, idEstado } = req.body;
  const sql = `
    INSERT INTO T_CITAS (TCitas_Fecha, TCitas_Hora, TCitas_Motivo, TCitas_Observaciones, TCitas_IdMascota, TCitas_IdVeterinario, TCitas_IdEstado)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `;
  const valores = [fecha, hora, motivo, observaciones, idMascota, idVeterinario, idEstado];
  db.query(sql, valores, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ mensaje: "Cita creada", id: result.insertId });
  });
};

exports.eliminarCita = (req, res) => {
  const { id } = req.params;
  db.query("DELETE FROM T_CITAS WHERE TCitas_IdCita = ?", [id], (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ mensaje: "Cita eliminada" });
  });
};

exports.actualizarCita = (req, res) => {
  const { id } = req.params;
  const { fecha, hora, motivo, observaciones, idMascota, idVeterinario, idEstado } = req.body;

  const sql = `
    UPDATE T_CITAS 
    SET TCitas_Fecha = ?, TCitas_Hora = ?, TCitas_Motivo = ?, TCitas_Observaciones = ?, 
        TCitas_IdMascota = ?, TCitas_IdVeterinario = ?, TCitas_IdEstado = ?
    WHERE TCitas_IdCita = ?
  `;

  const valores = [fecha, hora, motivo, observaciones, idMascota, idVeterinario, idEstado, id];

  db.query(sql, valores, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ mensaje: "Cita actualizada" });
  });
};
