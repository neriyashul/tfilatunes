import { useEffect, useState } from "react";
import YoutubeEmbed from "../youtube-embed";
import { Divider, Typography } from "@mui/material";
import { grey } from "../../utils/colors";
import LongRating from "../rating/LongRating";
import ListSelector from "../list-selector";

export default function TunePageMobile({ player, rate }) {
    const id = "lBfa7fGPpxQ";
    const startAt = 24;
    const width = "100%";

    // player.width = "100%";

    useEffect(() => {
        player.setId(id);
        player.setProps({
            style: {
                width: width,
                zIndex: 2,
            },
        });
        player.setStartAt(startAt);
    });

    return (
        <div>
            <Typography sx={{ mx: 3, mt: 1, fontSize: "1.5rem" }}>
                דוד מלך - רבי שלמה קרליבך הופעה בישראל בשנת 1987
            </Typography>
            <Divider role="presentation" sx={{ margin: 2 }} />
            <Typography sx={{ ml: 3, fontSize: "1.4rem" }}>דירוג:</Typography>
            <LongRating
                rate={rate}
                labelSize="1.2rem"
                iconsSize="medium"
                sx={{ ml: 4 }}
            />
            <Divider role="presentation" sx={{ margin: 2 }} />
            <Typography sx={{ ml: 3, fontSize: "1.4rem" }}>ביצועים:</Typography>
            <ListSelector
                // onClick={(index) => player.changeVideo(srcs[index])}
            />
            <Divider role="presentation" sx={{ margin: 2 }} />
            <Typography sx={{ ml: 3, mb: 2, fontSize: "1.5rem" }}>
                מזמור צ"ה
            </Typography>
            <Typography sx={{ mx: 3, pb: 3, fontSize: "1.4rem" }}>
                לְכוּ נְרַנְּנָה לַה' נָרִיעָה לְצוּר יִשְׁעֵנוּ: נְקַדְּמָה
                פָנָיו בְּתוֹדָה בִּזְמִרוֹת נָרִיעַ לוֹ: כִּי אֵל גָּדוֹל ה'
                וּמֶלֶךְ גָּדוֹל עַל כָּל אֱלֹהִים: אֲשֶׁר בְּיָדוֹ מֶחְקְרֵי
                אָרֶץ וְתוֹעֲפוֹת הָרִים לוֹ: אֲשֶׁר לוֹ הַיָּם וְהוּא עָשָׂהוּ
                וְיַבֶּשֶׁת יָדָיו יָצָרוּ: בֹּאוּ נִשְׁתַּחֲוֶה וְנִכְרָעָה
                נִבְרְכָה לִפְנֵי ה' עֹשֵׂנוּ: כִּי הוּא אֱלֹהֵינוּ וַאֲנַחְנוּ
                עַם מַרְעִיתוֹ וְצֹאן יָדוֹ הַיּוֹם אִם בְּקֹלוֹ תִשְׁמָעוּ:
            </Typography>
        </div>
    );
}
