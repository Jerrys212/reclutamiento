import { useNavigate } from "react-router-dom";
import { ChecklistIcon, ListItemButton, ListItemIcon, ListItemText } from "../exports";

const CustomList = ({ primary, onAccordionClick }: any) => {
    const navigate = useNavigate();

    return (
        <>
            <ListItemButton
                onClick={() => {
                    navigate(`${onAccordionClick}`);
                }}
            >
                <ListItemIcon>
                    <ChecklistIcon />
                </ListItemIcon>
                <ListItemText primary={primary} />
            </ListItemButton>
        </>
    );
};

export default CustomList;
