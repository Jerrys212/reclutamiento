import { useState } from "react";
import {
    AppBar,
    Box,
    Button,
    Checkbox,
    Container,
    SearchIcon,
    DownloadIcon,
    IconButton,
    InputBase,
    Paper,
    Tab,
    Tabs,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
    Toolbar,
    TablePagination,
    Tooltip,
    AddIcon,
    DeleteIcon,
    EditNoteIcon,
    CloseIcon,
    EditIcon,
} from "../exports";
import { Vacante } from "../interfaces";
import VacantesModal from "../components/VacantesModal";

const Vacantes = () => {
    const vacantesData: Vacante[] = [
        { id: 1, nombre: "Torton o Rabón", vacantes: 100, inicio: "19/04/2024", termino: "09/05/2029", jornada: "8 hrs", creadoPor: "Admin Traxión", estado: "Activa" },
        { id: 2, nombre: "Tractocamión Full", vacantes: 31, inicio: "11/12/2023", termino: "11/11/2026", jornada: "8 hrs", creadoPor: "nuestro equipo de talento", estado: "Activa" },
        { id: 3, nombre: "Tractocamión Sencill", vacantes: 75, inicio: "04/03/2024", termino: "06/05/2026", jornada: "8 hrs", creadoPor: "nuestro equipo de talento", estado: "Activa" },
        { id: 4, nombre: "Camioneta", vacantes: 100, inicio: "19/04/2024", termino: "05/05/2027", jornada: "8 hrs", creadoPor: "nuestro equipo de talento", estado: "Activa" },
    ];

    const [tabIndex, setTabIndex] = useState(0);
    const [searchQuery, setSearchQuery] = useState("");
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [page, setPage] = useState(0);

    const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
        setTabIndex(newValue);
    };

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
    };

    const filteredVacantes = vacantesData.filter((vacante) => vacante.nombre.toLowerCase().includes(searchQuery.toLowerCase()));

    const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    return (
        <>
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingBottom: 2 }}>
                <Typography variant="h5">Vacantes</Typography>
                <Tooltip title="Nueva Vacante">
                    <Button variant="contained" endIcon={<AddIcon />}>
                        Nueva Vacante
                    </Button>
                </Tooltip>
            </Box>

            <Paper elevation={1} sx={{ padding: 2, marginTop: 2 }}>
                <Toolbar>
                    <InputBase placeholder="Buscar" value={searchQuery} onChange={handleSearchChange} startAdornment={<SearchIcon />} sx={{ marginLeft: 1, flex: 1 }} />
                    <IconButton>
                        <DownloadIcon />
                        <Typography variant="body2" sx={{ marginLeft: 1 }}>
                            Descargar XLSX
                        </Typography>
                    </IconButton>
                </Toolbar>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Id</TableCell>
                                <TableCell>Nombre</TableCell>
                                <TableCell>Vacantes</TableCell>
                                <TableCell>Inicio</TableCell>
                                <TableCell>Término</TableCell>
                                <TableCell>Jornada</TableCell>
                                <TableCell>Creado por</TableCell>
                                <TableCell>Estado</TableCell>
                                <TableCell>Acciones</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {filteredVacantes.map((vacante) => (
                                <TableRow key={vacante.id}>
                                    <TableCell>{vacante.id}</TableCell>
                                    <TableCell>{vacante.nombre}</TableCell>
                                    <TableCell>{vacante.vacantes}</TableCell>
                                    <TableCell>{vacante.inicio}</TableCell>
                                    <TableCell>{vacante.termino}</TableCell>
                                    <TableCell>{vacante.jornada}</TableCell>
                                    <TableCell>{vacante.creadoPor}</TableCell>
                                    <TableCell>{vacante.estado}</TableCell>
                                    <TableCell>
                                        <Tooltip title="Modificar Vacante">
                                            <IconButton aria-label="edit" size="large" color="warning">
                                                <EditIcon fontSize="inherit" />
                                            </IconButton>
                                        </Tooltip>
                                        <Tooltip title="Borrar Vacante">
                                            <IconButton aria-label="delete" size="large" color="error">
                                                <DeleteIcon fontSize="inherit" />
                                            </IconButton>
                                        </Tooltip>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination rowsPerPageOptions={[5, 10, 25]} component="div" count={filteredVacantes.length} rowsPerPage={rowsPerPage} page={page} onPageChange={handleChangePage} onRowsPerPageChange={handleChangeRowsPerPage} />
            </Paper>

            <VacantesModal />
        </>
    );
};

export default Vacantes;
