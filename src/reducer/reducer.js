const initialState = 'light';

const themeReducer = (toggleTheme = initialState, action) => {
    switch (action.type) {
        case "TOGGLE_THEME":
            return toggleTheme = (toggleTheme === "light" ? "dark" : "light");
        default:
            return toggleTheme;
    }
};

export default themeReducer;