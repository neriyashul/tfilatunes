import { Link } from "react-router-dom";
import { Button, Grid, List } from "@mui/material";
import styles, { buttonProps } from "./style";

export default function TuneButtons({ tfilot }) {
    const listItems = tfilot?.map((tfila) => {
        return (
            <Grid item>
                <Button
                    component={Link}
                    to={"/tunes?text=" + tfila.key}
                    {...buttonProps}
                >
                    {tfila.name}
                </Button>
            </Grid>
        );
    });

    return (
        <Grid container sx={styles.grid}>
            {listItems}
        </Grid>
    );
}
