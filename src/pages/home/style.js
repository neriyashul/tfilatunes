const styles = {
    background: {
        top: 0,
        position: "fixed",
        width: "100%",
        height: "100vh",
    },

    main: {
        top: 0,
        position: "fixed",
        width: "100%",
        height: "100vh",
        overflow: "auto",
        pb: 5,
    },

    heading: {
        position: "relative",
        width: "80%",
        left: "10%",
        textAlign: "center",
        marginTop: { xs: "20vh", md: "25vh" },
    },

    grid: {
        display: "flex",
        marginTop: { xs: "20vh", md: "23vh" },
        alignItems: "center",
        justifyContent: "center",
    },
};
export default styles;

export const buttonProps = {
    variant: "contained",
    sx: {
        position: "relative",
        width: "300px",
        height: "70px",
        fontSize: "1.5rem",
        mx: 12,
        my: 3,
    },
};
