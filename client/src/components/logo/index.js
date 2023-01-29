import { Stack } from "@mui/material";
import { StyledHeader } from "./style";
import { projectName } from "../../utils/strings";
import { StyledImage } from "./style";

export default function Logo(props) {
    return (
        <Stack direction="row" {...props}>
            <StyledImage
                alt="logo image"
                src={`${process.env.PUBLIC_URL}/assets/images/logo.png`}
            />
            <StyledHeader>{projectName}</StyledHeader>
        </Stack>
    );
}
