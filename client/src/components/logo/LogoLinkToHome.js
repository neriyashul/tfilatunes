import Logo from ".";
import { StyledLink } from "./style";

export default function LogoLinkToHome(props) {
    return (
        <StyledLink to="/" {...props}>
            <Logo />
        </StyledLink>
    );
}
