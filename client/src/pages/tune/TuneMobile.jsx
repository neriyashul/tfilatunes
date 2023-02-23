import { useEffect } from "react";
import { Box, Divider, Typography } from "@mui/material";
import LongRating from "../../components/rating/LongRating";
import SelectionList from "../../components/select/list";
import { ratingProps, mobileStyles as styles } from "./style";

export default function TuneMobile({ player, rate }) {
    useEffect(() => {
        player.setProps({
            style: styles.player,
        });
    });

    return (
        <div>
            <Box>
                <Box sx={player.styles.aspectRatio} />
            </Box>
            <Typography sx={styles.videoName}>
                דוד מלך - רבי שלמה קרליבך הופעה בישראל בשנת 1987
            </Typography>
            <Divider role="presentation" sx={styles.divider} />
            <Typography sx={styles.ratingHeader}>דירוג:</Typography>
            <LongRating rate={rate} {...ratingProps.mobile} />
            <Divider role="presentation" sx={styles.divider} />
            <Typography sx={styles.performanceHeader}>ביצועים:</Typography>
            <SelectionList onClick="" />
            <Divider role="presentation" sx={styles.divider} />
            <Typography sx={styles.textHeader}>מזמור צ&quot;ה</Typography>
            <Typography sx={styles.text}>
                לְכוּ נְרַנְּנָה לַה&apos; נָרִיעָה לְצוּר יִשְׁעֵנוּ: נְקַדְּמָה
                פָנָיו בְּתוֹדָה בִּזְמִרוֹת נָרִיעַ לוֹ: כִּי אֵל גָּדוֹל ה&apos;
                וּמֶלֶךְ גָּדוֹל עַל כָּל אֱלֹהִים: אֲשֶׁר בְּיָדוֹ מֶחְקְרֵי
                אָרֶץ וְתוֹעֲפוֹת הָרִים לוֹ: אֲשֶׁר לוֹ הַיָּם וְהוּא עָשָׂהוּ
                וְיַבֶּשֶׁת יָדָיו יָצָרוּ: בֹּאוּ נִשְׁתַּחֲוֶה וְנִכְרָעָה
                נִבְרְכָה לִפְנֵי ה&apos; עֹשֵׂנוּ: כִּי הוּא אֱלֹהֵינוּ וַאֲנַחְנוּ
                עַם מַרְעִיתוֹ וְצֹאן יָדוֹ הַיּוֹם אִם בְּקֹלוֹ תִשְׁמָעוּ:
            </Typography>
        </div>
    );
}
