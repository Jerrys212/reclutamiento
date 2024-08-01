import { Card, CardContent, Typography, Box, IconButton } from "../exports";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const DashboardCard = () => {
    return (
        <Card sx={{ minWidth: 275, backgroundColor: "#f9f9f9" }}>
            <CardContent>
                <Box display="flex" justifyContent="space-between" alignItems="center">
                    <Box>
                        <Typography variant="body2" color="textSecondary">
                            Mes pasado
                        </Typography>
                        <Typography variant="body2" color="green">
                            +0%
                        </Typography>
                    </Box>
                    <IconButton>
                        <AccountCircleIcon color="primary" />
                    </IconButton>
                </Box>
                <Typography variant="h5" textAlign={"center"} component="div" mt={2}>
                    Vacantes
                </Typography>
                <Typography variant="h2" textAlign={"center"} component="div" mt={1}>
                    4
                </Typography>
                <Typography variant="body2" textAlign={"center"} color="textSecondary">
                    activas este mes
                </Typography>
            </CardContent>
        </Card>
    );
};

export default DashboardCard;
