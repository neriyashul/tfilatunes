import { Input, Select } from "@mui/material";
import getStyles from "./style";

export default function MenuSelect(props) {
    const styles = getStyles(props);
    return (
        <Select
            MenuProps={{
                disableScrollLock: true,
            }}
            sx={styles.button}
            input={<Input />}
            {...props}
        >
            {props.children}
        </Select>
    );
}
