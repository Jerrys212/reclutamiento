import { Outlet } from "react-router-dom";
import { Container } from "../exports/index";
import Header from "./Header";

const PrivateLayout = () => {
    return (
        <>
            <Header />

            <Container maxWidth="xl" sx={{ marginTop: "50px", paddingBottom: "50px" }}>
                <Outlet />
            </Container>
        </>
    );
};

export default PrivateLayout;
