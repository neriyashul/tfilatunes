import React, { useEffect } from "react";
import { Box, Divider, Grid, Paper, Typography } from "@mui/material";
import {
    desktopStyles as styles,
    ratingProps,
} from "./style";
import LongRating from "../../components/rating/LongRating";
import SelectionList from "../../components/select/list";

export default function TuneDesktop({ player, rate }) {
    useEffect(() => {
        player.setProps({ style: styles.player });
    });

    return (
        <Grid container>
            <Grid item xs={8}>
                <Box sx={styles.playerLocation}>
                    <Box sx={player.styles.aspectRatio} />
                </Box>
                <Typography sx={styles.header}>מזמור צ&quot;ה:</Typography>
                <Typography sx={styles.text}>
                    נְקַדְּמָה פָנָיו בְּתוֹדָה בִּזְמִרוֹת נָרִיעַ לוֹ: כִּי
                    אֵל גָּדוֹל ה&apos; וּמֶלֶךְ גָּדוֹל עַל כָּל אֱלֹהִים: אֲשֶׁר
                    בְּיָדוֹ מֶחְקְרֵי אָרֶץ וְתוֹעֲפוֹת הָרִים לוֹ: אֲשֶׁר לוֹ
                    הַיָּם וְהוּא עָשָׂהוּ וְיַבֶּשֶׁת יָדָיו יָצָרוּ: בֹּאוּ
                    נִשְׁתַּחֲוֶה וְנִכְרָעָה נִבְרְכָה לִפְנֵי ה&apos; עֹשֵׂנוּ:
                    כִּי הוּא אֱלֹהֵינוּ וַאֲנַחְנוּ עַם מַרְעִיתוֹ וְצֹאן יָדוֹ
                    הַיּוֹם אִם בְּקֹלוֹ תִשְׁמָעוּ: אַל תַּקְשׁוּ לְבַבְכֶם
                    כִּמְרִיבָה כְּיוֹם מַסָּה בַּמִּדְבָּר: אֲשֶׁר נִסּוּנִי
                    אֲבוֹתֵיכֶם בְּחָנוּנִי גַּם רָאוּ פָעֳלִי: אַרְבָּעִים
                    שָׁנָה אָקוּט בְּדוֹר וָאֹמַר עַם תֹּעֵי לֵבָב הֵם וְהֵם לֹא
                    יָדְעוּ דְרָכָי: אֲשֶׁר נִשְׁבַּעְתִּי בְאַפִּי אִם יְבֹאוּן
                    אֶל מְנוּחָתִי: פָנָיו בְּתוֹדָה בִּזְמִרוֹת נָרִיעַ לוֹ:
                    כִּי אֵל גָּדוֹל ה&apos; וּמֶלֶךְ גָּדוֹל עַל כָּל אֱלֹהִים:
                    אֲשֶׁר בְּיָדוֹ מֶחְקְרֵי אָרֶץ וְתוֹעֲפוֹת הָרִים לוֹ:
                    אֲשֶׁר לוֹ הַיָּם וְהוּא עָשָׂהוּ וְיַבֶּשֶׁת יָדָיו
                    יָצָרוּ: בֹּאוּ נִשְׁתַּחֲוֶה וְנִכְרָעָה נִבְרְכָה לִפְנֵי
                    ה&apos; עֹשֵׂנוּ: כִּי הוּא אֱלֹהֵינוּ וַאֲנַחְנוּ עַם מַרְעִיתוֹ
                    וְצֹאן יָדוֹ הַיּוֹם אִם בְּקֹלוֹ תִשְׁמָעוּ: אַל תַּקְשׁוּ
                    לְבַבְכֶם כִּ
                </Typography>
            </Grid>
            <Grid item xs={4}>
                <Paper sx={styles.sideContainer}>
                    <Typography sx={styles.ratingHeader}>דירוג:</Typography>
                    <LongRating rate={rate} {...ratingProps.desktop} />
                    <Divider role="presentation" sx={styles.divider} />
                    <Typography sx={styles.performanceHeader}>
                        ביצועים:
                    </Typography>
                    <SelectionList
                    // onClick={(index) => player.changeVideo(srcs[index])}
                    />
                </Paper>
            </Grid>
        </Grid>
    );
}
