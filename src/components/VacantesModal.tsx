import { ChangeEvent, useState } from "react";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, MenuItem, Select, FormControl, InputLabel, inputSX } from "../exports";

const VacantesModal = () => {
    const [openModal, setOpenModal] = useState(true);
    const [formData, setFormData] = useState({
        nombre: "",
        descripcion: "",
        jornadaLaboral: "",
        vacantesDisponibles: "",
        fechaInicio: "",
        fechaExpiracion: "",
        maximoCandidatos: "",
        disponibilidad: "",
        tipoHorario: "",
        estudiosMinimos: "",
    });

    const handleOpenModal = () => {
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
    };

    const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = () => {
        console.log("Formulario enviado", formData);
        handleCloseModal();
    };

    return (
        <Dialog open={openModal} onClose={handleCloseModal}>
            <DialogTitle>Nueva Vacante</DialogTitle>
            <DialogContent>
                <TextField margin="dense" name="nombre" label="Nombre" type="text" fullWidth value={formData.nombre} onChange={handleInputChange} sx={inputSX} />
                <TextField margin="dense" name="descripcion" label="Descripción" type="text" fullWidth value={formData.descripcion} onChange={handleInputChange} sx={inputSX} />
                <TextField margin="dense" name="jornadaLaboral" label="Jornada laboral" type="text" fullWidth value={formData.jornadaLaboral} onChange={handleInputChange} sx={inputSX} />
                <TextField margin="dense" name="vacantesDisponibles" label="Vacantes disponibles" type="number" fullWidth value={formData.vacantesDisponibles} onChange={handleInputChange} sx={inputSX} />
                <TextField margin="dense" name="fechaInicio" label="Fecha de inicio" type="date" fullWidth InputLabelProps={{ shrink: true }} value={formData.fechaInicio} onChange={handleInputChange} sx={inputSX} />
                <TextField margin="dense" name="fechaExpiracion" label="Fecha de expiración" type="date" fullWidth InputLabelProps={{ shrink: true }} value={formData.fechaExpiracion} onChange={handleInputChange} sx={inputSX} />
                <TextField margin="dense" name="maximoCandidatos" label="Máximo de candidatos" type="number" fullWidth value={formData.maximoCandidatos} onChange={handleInputChange} sx={inputSX} />
                <TextField margin="dense" name="disponibilidad" label="Disponibilidad" type="text" fullWidth value={formData.disponibilidad} onChange={handleInputChange} sx={inputSX} />
                <FormControl fullWidth margin="dense" sx={inputSX}>
                    <InputLabel id="tipo-horario-label">Tipo de horario</InputLabel>
                    <Select labelId="tipo-horario-label" name="tipoHorario" value={formData.tipoHorario} onChange={handleInputChange} label="Tipo de horario">
                        <MenuItem value="Tiempo completo">Tiempo completo</MenuItem>
                        <MenuItem value="Medio tiempo">Medio tiempo</MenuItem>
                        <MenuItem value="Por horas">Por horas</MenuItem>
                    </Select>
                </FormControl>
                <TextField margin="dense" name="estudiosMinimos" label="Estudios mínimos requeridos" type="text" fullWidth value={formData.estudiosMinimos} onChange={handleInputChange} sx={inputSX} />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleCloseModal}>Cancelar</Button>
                <Button onClick={handleSubmit} color="primary">
                    Guardar
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default VacantesModal;
