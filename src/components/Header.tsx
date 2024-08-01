import { useNavigate } from "react-router-dom";
import { AppBar, Box, Toolbar, Typography, Button, IconButton, MenuIcon, Drawer, List, CloseIcon } from "../exports/index";
import { useState } from "react";
import CustomList from "./CustomList";

const Header = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = () => {
        setDrawerOpen(!drawerOpen);
    };

    const navigate = useNavigate();

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" sx={{ bgcolor: "#fb8c00" }}>
                    <Toolbar>
                        <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }} onClick={toggleDrawer}>
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Reclutamiento Telo
                        </Typography>
                        <Button color="inherit">Login</Button>
                    </Toolbar>
                </AppBar>
            </Box>

            <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer}>
                <div style={{ width: "350px" }}>
                    <IconButton edge="end" color="inherit" aria-label="menu" onClick={toggleDrawer}>
                        <CloseIcon />
                    </IconButton>
                    <List>
                        <CustomList primary="Dashboard" onAccordionClick={""} />
                        <CustomList primary="Vacantes" onAccordionClick={"vacantes"} />
                    </List>
                </div>
            </Drawer>
        </>
    );
};

export default Header;
