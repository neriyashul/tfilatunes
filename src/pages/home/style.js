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
    },

    heading: {
        position: "relative",
        fontSize: { xs: "2.5rem", md: "2.5rem" },
        textAlign: "center",
        marginTop: { xs: "20vh", md: "25vh" },
    },

    grid: {
        display: "flex",
        marginTop: { xs: "15vh", md: "22vh" },
        alignItems: "center",
        justifyContent: "center",
        px: 20,
        mb: 5
    },
};
export default styles;

export const buttonProps = {
    variant: "contained",
    sx: {
        position: "relative",
        width: { xs: "300px", md: "250px" },
        height: "65px",
        fontSize: "1.5rem",
        mx: 2,
        my: 2,
    },
};
