import { useState } from "react";
import YoutubeEmbed from "./youtube-embed";
import { Divider, Typography } from "@mui/material";
import { grey } from "../utils/colors";
import LongRating from "./rarting/LongRating";

export default function TunePage() {
    const id = "t3rJYhqltdk";
    const rate = 4;
    return (
        <div>
            <YoutubeEmbed id={id} startAt={50} width="100%" />
            <Typography sx={{ mx: 3, mt: 1, fontSize: "1.4rem" }}>
                דוד מלך - רבי שלמה קרליבך הופעה בישראל בשנת 1987
            </Typography>
            <Divider role="presentation" color={grey} sx={{ margin: 2 }} />
            <LongRating rate={rate}/>
        </div>
    );
}
