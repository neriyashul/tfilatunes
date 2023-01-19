import * as React from "react";
import PropTypes from "prop-types";
import { Global } from "@emotion/react";
import { styled } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { grey, black, blueGrey } from "@mui/material/colors";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Typography from "@mui/material/Typography";
import { Divider, Menu, MenuItem, Select } from "@mui/material";

const drawerBleeding = 56;

const darkGrey = "#272727"

const Root = styled("div")(({ theme }) => ({
    height: "100%",
    backgroundColor:
        theme.palette.mode === "light"
            ? grey[100]
            : theme.palette.background.default,
}));

const StyledBox = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "light" ? "#fff" : darkGrey,
}));

const StyledHeader = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "light" ? "#f0f0f0" : darkGrey,
}));

const Puller = styled(Box)(({ theme }) => ({
    width: 30,
    height: 6,
    backgroundColor: theme.palette.mode === "light" ? grey[300] : grey[900],
    borderRadius: 3,
    position: "absolute",
    top: 8,
    left: "calc(50% - 15px)",
}));

function SwipeableEdgeDrawer(props) {
    const [paragraph, setParagraph] = React.useState(1);

    return (
        <Root>
            <CssBaseline />
            <Global
                styles={{
                    ".MuiDrawer-root > .MuiPaper-root": {
                        height: `calc(50% - ${drawerBleeding}px)`,
                        overflow: "visible",
                    },
                }}
            />
            <Drawer
                variant="permanent"
                anchor="bottom"
                ModalProps={{
                    keepMounted: true,
                }}
            >
                <StyledHeader
                    sx={{
                        position: "absolute",
                        top: -drawerBleeding,
                        borderTopLeftRadius: 8,
                        borderTopRightRadius: 8,
                        visibility: "visible",
                        right: 0,
                        left: 0,
                        px: 1.5
                    }}
                >
                    <Puller />
                    <Select
                        sx={{
                            color: "text.primary",
                            ".MuiOutlinedInput-notchedOutline": { border: 0 },
                        }}
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={paragraph}
                        label="Age"
                        onChange={(event) => setParagraph(event.target.value)}
                    >
                        <MenuItem value={1}>לכו נרננה</MenuItem>
                        <MenuItem value={2}>ארבעים שנה</MenuItem>
                    </Select>
                </StyledHeader>
                <StyledBox
                    sx={{
                        p: 2,
                        px: 3,
                        height: "100%",
                        overflow: "auto",
                    }}
                >
                    <Typography sx={{ fontSize: "1.5rem" }}>
                        לְכָה דוֹדִי לִקְרַאת כַּלָּה
                        פְּנֵי שַׁבָּת נְקַבְּלָה
                        <br />
                        <br />


                        שָׁמוֹר וְזָכוֹר בְּדִבּוּר אֶחָד
                        הִשְׁמִיעָנוּ אֵל
                        הַמְּיֻחָד<br />
                        ה' אֶחָד וּשְׁמוֹ אֶחָד
                        לְשֵׁם וּלְתִפְאֶרֶת
                        וְלִתְהִלָּה
                        <br />
                        <br />
                        לִקְרַאת שַׁבָּת לְכוּ וְנֵלְכָה
                        כִּי הִיא מְקוֹר הַבְּרָכָה<br />
                        מֵרֹאשׁ מִקֶּדֶם נְסוּכָה
                        סוֹף מַעֲשֶׂה בְּמַחֲשָׁבָה תְּחִלָּה
                        <br />
                        <br />
                        מִקְדַּשׁ מֶלֶךְ עִיר מְלוּכָה
                        קוּמִי צְאִי מִתּוֹךְ הַהֲפֵכָה<br />
                         רַב לָךְ שֶׁבֶת בְּעֵמֶק הַבָּכָא
                         וְהוּא יַחֲמוֹל עָלַיִךְ חֶמְלָה
                        <br />

                        <br />
                        הִתְנַעֲרִי מֵעָפָר קוּמִי
                         לִבְשִׁי בִּגְדֵי תִפְאַרְתֵּךְ עַמִּי<br />
                         עַל יַד בֶּן יִשַׁי בֵּית הַלַּחְמִי
                          קָרְבָה אֶל נַפְשִׁי גְּאָלָהּ
                        <br />
                        <br />
                        הִתְעוֹרְרִי הִתְעוֹרְרִי
                        כִּי בָא אוֹרֵךְ קוּמִי אוֹרִי<br />
                        עוּרִי עוּרִי שִׁיר דַּבֵּרִי
                        כְּבוֹד ה' עָלַיִךְ נִגְלָה
                        <br />
                        <br />
                        לֹא תֵבֹשִׁי וְלֹא תִכָּלְמִי
                        מַה תִּשְׁתּוֹחֲחִי וּמַה תֶּהֱמִי<br />
                        בָּךְ יֶחֱסוּ עֲנִיֵּי עַמִּי
                        וְנִבְנְתָה עִיר עַל תִּלָּהּ
                        <br />
                        <br />
                        וְהָיוּ לִמְשִׁסָּה שֹׁאסָיִךְ
                        וְרָחֲקוּ כָּל מְבַלְּעָיִךְ<br />
                        יָשִׂישׂ עָלַיִךְ אֱלֹהָיִךְ
                        כִּמְשׂוֹשׂ חָתָן עַל כַּלָּה
                        <br />
                        <br />
                        יָמִין וּשְׂמֹאל תִּפְרֹצִי
                        וְאֶת ה' תַּעֲרִיצִי<br />
                        עַל יַד אִישׁ בֶּן פַּרְצִי
                        וְנִשְׂמְחָה וְנָגִילָה
                        <br />
                        <br />
                        בֹּאִי בְשָׁלוֹם עֲטֶרֶת בַּעְלָהּ
                        גַּם בְּשִׂמְחָה (בְּרִנָה) וּבְצָהֳלָה<br />
                        תּוֹךְ אֱמוּנֵי עַם סְגֻלָּה
                        בּוֹאִי כַלָּה בּוֹאִי כַלָּה<br />
                        (תּוֹךְ אֱמוּנֵי עַם
                        סְגֻלָּה בּוֹאִי כַלָּה שַׁבָּת מַלְכְּתָא)
                    </Typography>
                </StyledBox>
            </Drawer>
        </Root>
    );
}

export default SwipeableEdgeDrawer;
