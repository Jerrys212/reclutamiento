import { Backdrop, CircularProgress } from "../exports/index";

interface SpinnerProps {
    spinnerToggle: boolean;
}

const Spinner = ({ spinnerToggle }: SpinnerProps) => {
    return (
        <Backdrop sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }} open={spinnerToggle}>
            <CircularProgress color="inherit" />
        </Backdrop>
    );
};

export default Spinner;
