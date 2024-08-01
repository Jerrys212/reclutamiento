import { FocusEvent, ChangeEvent, FormEvent, useState } from "react";
import { Alert, Grid, Paper, TextField, Button, Typography, Box } from "../exports";
import { LoginTypes } from "../interfaces";
// import axios from "axios";

const Login = () => {
    const [user, setUser] = useState<LoginTypes>({ username: "", password: "" });
    const [error, setError] = useState<string | null>(null);

    const [touched, setTouched] = useState<{ username: boolean; password: boolean }>({ username: false, password: false });

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();
        setError(null);

        if (Object.values(user).includes("")) {
            setError("Todos los campos son obligatorios");

            return;
        }

        try {
            // const response = await axios.post("https://your-api-endpoint/login", user);
            console.log("Login successful", user);
            // Manejar la respuesta de éxito, como redireccionar a otra página
        } catch (err) {
            console.error("Login failed", err);
            setError("Login failed. Please check your username and password.");
        }
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
        setTouched({ ...touched, [e.target.name]: true });
    };

    return (
        <>
            <Grid container style={{ height: "100vh" }}>
                <Grid item xs={12} md={7} style={{ background: "url(https://digitaltelo.com/telo-bgr.879416b61d20c53c.webp) no-repeat center center", backgroundSize: "cover" }}></Grid>

                <Grid item xs={12} md={5} container alignItems="center" justifyContent="center">
                    <Paper elevation={6} style={{ padding: "2rem", width: "80%", maxWidth: "400px" }}>
                        <Box textAlign="center" mb={3}>
                            <Typography variant="h4">Reclutamiento Telo</Typography>
                        </Box>
                        <form onSubmit={handleSubmit}>
                            {error && (
                                <Alert variant="filled" severity="error">
                                    {error}
                                </Alert>
                            )}

                            <TextField
                                error={!user.username && touched.username}
                                helperText={!user.username && touched.username ? "El Usuario Es Requerido" : ""}
                                label="Usuario"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                name="username"
                                id="username"
                                value={user.username}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            <TextField
                                error={!user.password && touched.password}
                                helperText={!user.password && touched.password ? "La Contraseña Es Requerida" : ""}
                                label="Contraseña"
                                variant="outlined"
                                type="password"
                                fullWidth
                                margin="normal"
                                name="password"
                                id="password"
                                value={user.password}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />

                            <Box mt={2}>
                                <Button
                                    type="submit"
                                    variant="contained"
                                    fullWidth
                                    sx={{
                                        backgroundColor: "#fb8c00",
                                        "&:hover": {
                                            backgroundColor: "#ffb300",
                                        },
                                    }}
                                >
                                    Entrar
                                </Button>
                            </Box>
                        </form>
                    </Paper>
                </Grid>
            </Grid>
        </>
    );
};

export default Login;
