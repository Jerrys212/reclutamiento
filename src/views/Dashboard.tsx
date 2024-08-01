import { useState } from "react";
import { Grid, Paper, Typography } from "../exports/index";
import Spinner from "../components/Spinner";
import DashboardCard from "../components/DashboardCard";
import PieChart from "../components/PieChart";
import BarChart from "../components/BarChart";

const Dashboard = () => {
    const [spinner, setSpinner] = useState(false);

    const UserData = [
        {
            id: 1,
            year: "Contratados",
            userGain: 80000,
            userLost: 823,
        },
        {
            id: 2,
            year: "Rechazados",
            userGain: 45677,
            userLost: 345,
        },
        {
            id: 3,
            year: "En Proceso",
            userGain: 78888,
            userLost: 555,
        },
    ];

    const chartData = {
        labels: UserData.map((data) => data.year.toString()), // Convierte los años a cadenas
        datasets: [
            {
                label: "",
                data: UserData.map((data) => data.userGain),
                backgroundColor: ["rgba(75,192,192,1)", "#ecf0f1", "#50AF95", "#f3ba2f", "#2a71d0"],
                borderColor: "black",
                borderWidth: 1,
            },
        ],
    };

    return (
        <>
            <Paper
                sx={{
                    backgroundColor: "white",
                    padding: "30px",
                    borderRadius: "5px",
                }}
                elevation={10}
            >
                <Grid container spacing={1} sx={{ marginTop: "10px" }}>
                    <Grid item xs={12} sm={6} md={4}>
                        <DashboardCard />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <DashboardCard />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <DashboardCard />
                    </Grid>
                </Grid>

                <Grid container spacing={6} sx={{ marginTop: "10px" }}>
                    <Grid item xs={12} sm={6} md={6}>
                        <Paper
                            sx={{
                                backgroundColor: "white",
                                padding: "30px",
                                borderRadius: "5px",
                            }}
                            elevation={10}
                        >
                            <PieChart chartData={chartData} />
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                        <Paper
                            sx={{
                                backgroundColor: "white",
                                padding: "30px",
                                borderRadius: "5px",
                            }}
                            elevation={10}
                        >
                            <Typography variant="h5" textAlign={"center"} marginBottom={"20px"}>
                                Historial de Candidatos
                            </Typography>

                            <BarChart chartData={chartData} />
                        </Paper>
                    </Grid>
                </Grid>
            </Paper>

            <Spinner spinnerToggle={spinner} />
        </>
    );
};

export default Dashboard;
