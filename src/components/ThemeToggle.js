import { useDispatch, useSelector } from "react-redux"
import { toggle_theme } from "../action/actionTypes";

export const ThemeToggle = () => {
    const dispatch = useDispatch();
    const theme = useSelector((state) => state);
    const handleToggle = () => {
        dispatch(toggle_theme());
    };

    return (
        <div>
            <button onClick={handleToggle}>сменить на {theme === "light" ? "темную" : "светлую"} тему </button>
        </div>
    )
}