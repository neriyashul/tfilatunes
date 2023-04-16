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
        width: "80%",
        left: "10%",
        textAlign: "center",
        marginTop: { xs: "20vh", md: "25vh" },
    },

    grid: {
        display: "flex",
        marginTop: { xs: "15vh", md: "24vh" },
        alignItems: "center",
        justifyContent: "center",
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
        mx: 3,
        my: 2,
    },
};
