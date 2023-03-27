export const styles = {
    form: {
        "& > :not(style)": {
            m: 2,
            width: "60%",
            marginX: "auto",
        },
    },

    submitButton: {
        width: 150,
        height: 45,
    },

    center: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },

    subheader: {
        position: "sticky",
        top: "-8px",
        padding: "4px 10px",
        backgroundColor: "#282828",
        fontWeight: "bold",
        color: "white",
        textDecoration: "underline",
    },

    item: { padding: 2 },
};

export const formProps = {
    sx: styles.form,
    autoComplete: "on",
};

export const autoCompleteProps = {
    groupBy: (option) => option.tfila,
    getOptionLabel: (option) => option.name,
    defaultValue: [],
};

export const removeTuneProps = {
    variant: "text",
    "aria-label": "delete performance",
    sx: {
        justifyContent: "flex-start",
        color: "white",
        width: "20rem",
    },
};

export const addTuneProps = {
    variant: "text",
    "aria-label": "add performance",
    sx: {
        justifyContent: "flex-start",
        color: "white",
        width: "20rem",
    },
};

export const passwordProps = {
    label: "סיסמה",
    variant: "outlined",
    name: "password",
    sx: { width: "10rem" },
    type: "password",
    autoComplete: "current-password",
    required: true,
};

export const startCheckBoxProps = {
    inputProps: { "aria-label": "Start time" },
};

export const numberFieldProps = {
    type: "number",
    inputProps: {
        inputMode: "numeric",
        pattern: "[0-9]*",
    },
    sx: { width: "5rem" },
};

export const uploadSuccessfulStyles = {
    container: {
        height: "80vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    icon: {
        width: "30%",
        height: "30%",
    },
    header1: { fontSize: "2rem" },
    header2: { fontSize: "1.2rem" },
};
