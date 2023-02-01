import React, { useEffect, useState } from "react";
import {
    Box,
    Button,
    Divider,
    Drawer,
    FormControl,
    InputLabel,
    MenuItem,
    Paper,
    Select,
    Skeleton,
    Typography,
    styled,
} from "@mui/material";
import { Link } from "react-router-dom";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import LongRating from "../rating/LongRating";
import ListSelector from "../list-selector";

// player.current.hidden = null;
// player.current.width = value+"%";
// player.current.id = id;

const startAt = 24;
const drawerWidth = "30%";
const rate = 4;

export default function TunePageDesktop({ player }) {
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === "dark" ? "#252525" : "#fff",
        ...theme.typography.body2,
        color: theme.palette.text.secondary,
    }));

    const [id, setId] = useState("lBfa7fGPpxQ");
    const [width, setWidth] = useState("50%");

    const handleChange = (event) => {
        setWidth(event.target.value + "%");
    };

    const handleChangeId = (event) => {
        setId(event.target.value);
    };

    useEffect(() => {
        player.setId(id);
        player.setProps({
            style: {
                position: "absolute",
                width: width,
                paddingTop: "25px",
                right: "8.5%",
                zIndex: 2,
            },
        });
        player.setStartAt(24);
    });

    return (
        <div>
            {/* <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Age</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={width}
                    label="Age"
                    onChange={handleChange}
                >
                    <MenuItem value={20}>20</MenuItem>
                    <MenuItem value={50}>50</MenuItem>
                    <MenuItem value={100}>100</MenuItem>
                </Select>
            </FormControl>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Id</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="dee-select"
                    value={id}
                    label="Age"
                    onChange={handleChangeId}
                >
                    <MenuItem value={"lBfa7fGPpxQ"}>דוד מלך</MenuItem>
                    <MenuItem value={"FLZXap_0zlw"}>מודזיץ</MenuItem>
                </Select>
            </FormControl> */}

            <Grid2 container>
                <Grid2 item xs={8}>
                    <div
                        style={{
                            width: "75%",
                            marginTop: "25px",
                            marginRight: 8.5 * 1.5 + "%",
                        }}
                    >
                            <div
                                style={{
                                    position: "relative",
                                    width: "100%",
                                    paddingTop: "56.25%",
                                    // backgroundColor: "red",
                                }}
                            >
                                <div
                                    style={{
                                        position: "absolute",
                                        top: 0,
                                        left: 0,
                                        bottom: 0,
                                        right: 0,
                                        textAlign: "center",
                                        fontSize: "20px",
                                        color: "white",
                                    }}
                                />
                            </div>
                    </div>
                    {/* <Item> */}
                    <Typography
                        sx={{
                            fontSize: "2rem",
                            pt: "25px",
                            // pt: { md: "33vw", lg: "32vw", xl: "31vw" },
                            ml: "8vw",
                        }}
                    >
                        מזמור צ"ה:
                    </Typography>
                    <Typography
                        sx={{
                            zIndex: 1,
                            fontSize: "1.5rem",
                            pt: 2,
                            paddingBottom: 3,
                            ml: "9vw",
                            mr: "8vw",
                        }}
                    >
                        נְקַדְּמָה פָנָיו בְּתוֹדָה בִּזְמִרוֹת נָרִיעַ לוֹ:
                        כִּי אֵל גָּדוֹל ה' וּמֶלֶךְ גָּדוֹל עַל כָּל אֱלֹהִים:
                        אֲשֶׁר בְּיָדוֹ מֶחְקְרֵי אָרֶץ וְתוֹעֲפוֹת הָרִים לוֹ:
                        אֲשֶׁר לוֹ הַיָּם וְהוּא עָשָׂהוּ וְיַבֶּשֶׁת יָדָיו
                        יָצָרוּ: בֹּאוּ נִשְׁתַּחֲוֶה וְנִכְרָעָה נִבְרְכָה
                        לִפְנֵי ה' עֹשֵׂנוּ: כִּי הוּא אֱלֹהֵינוּ וַאֲנַחְנוּ
                        עַם מַרְעִיתוֹ וְצֹאן יָדוֹ הַיּוֹם אִם בְּקֹלוֹ
                        תִשְׁמָעוּ: אַל תַּקְשׁוּ לְבַבְכֶם כִּמְרִיבָה כְּיוֹם
                        מַסָּה בַּמִּדְבָּר: אֲשֶׁר נִסּוּנִי אֲבוֹתֵיכֶם
                        בְּחָנוּנִי גַּם רָאוּ פָעֳלִי: אַרְבָּעִים שָׁנָה
                        אָקוּט בְּדוֹר וָאֹמַר עַם תֹּעֵי לֵבָב הֵם וְהֵם לֹא
                        יָדְעוּ דְרָכָי: אֲשֶׁר נִשְׁבַּעְתִּי בְאַפִּי אִם
                        יְבֹאוּן אֶל מְנוּחָתִי: פָנָיו בְּתוֹדָה בִּזְמִרוֹת
                        נָרִיעַ לוֹ: כִּי אֵל גָּדוֹל ה' וּמֶלֶךְ גָּדוֹל עַל
                        כָּל אֱלֹהִים: אֲשֶׁר בְּיָדוֹ מֶחְקְרֵי אָרֶץ
                        וְתוֹעֲפוֹת הָרִים לוֹ: אֲשֶׁר לוֹ הַיָּם וְהוּא
                        עָשָׂהוּ וְיַבֶּשֶׁת יָדָיו יָצָרוּ: בֹּאוּ
                        נִשְׁתַּחֲוֶה וְנִכְרָעָה נִבְרְכָה לִפְנֵי ה' עֹשֵׂנוּ:
                        כִּי הוּא אֱלֹהֵינוּ וַאֲנַחְנוּ עַם מַרְעִיתוֹ וְצֹאן
                        יָדוֹ הַיּוֹם אִם בְּקֹלוֹ תִשְׁמָעוּ: אַל תַּקְשׁוּ
                        לְבַבְכֶם כִּ
                    </Typography>
                    {/* </Item> */}
                </Grid2>
                <Grid2 item xs={4}>
                    <Item style={{ height: "100%", paddingTop: 25 }}>
                        <Typography sx={{ ml: 5.5, fontSize: "1.7rem" }}>
                            דירוג:
                        </Typography>
                        <LongRating
                            rate={rate}
                            labelSize="1.4rem"
                            iconsSize="large"
                            sx={{ ml: 7 }}
                        />
                        <Divider role="presentation" sx={{ margin: 3 }} />
                        <Typography sx={{ ml: 5.5, fontSize: "1.7rem" }}>
                            ביצועים:
                        </Typography>
                        <ListSelector
                            fontSize="1.2rem"
                            paddingX={3}
                            paddingY={0.8}
                            // onClick={(index) => player.changeVideo(srcs[index])}
                        />
                    </Item>
                </Grid2>
            </Grid2>
        </div>
    );
}
