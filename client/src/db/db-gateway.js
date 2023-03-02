const tunes = [
    {
        id: "1",
        name: "דוד מלך ישראל",
        composer: "ר' שלמה קרליבך",
        rate: "5",
        performances: [
            {
                label: "דוד מלך - רבי שלמה קרליבך",
                videoId: "lBfa7fGPpxQ",
                startAt: "24",
            },
            {
                label: "Lazer storch. Dovid melech yisroel chai vekayom",
                videoId: "C7Zx4rWKNxo",
                startAt: "76",
            },
        ],
    },
    {
        id: "2",
        name: "לכה דודי",
        composer: "מודז'יץ",
        rate: "4",
        performances: [
            {
                label: "ניגון לכה דודי - מודז'יץ // יצחק מאיר",
                videoId: "FLZXap_0zlw",
                startAt: "5",
            },
        ],
    },
];

export default class DBGateway {
    // const {
    //     isLoading: isMetadaraLoading,
    //     data: metadata,
    // } = useQuery("metadata", () => {dbGateway.getMetadata(key)});
    // const { isLoading: isTunesloading, data: tunes } = useQuery("tunes", () => {dbGateway.getTunes(key)});
    // const {data} = useQuery("texts", () => dbGateway.getText(key));

    // const { isLoading: isTextsloading, data: texts } = useQuery("texts", () =>
    //     dbGateway.getText(key)
    // );

    getTune(id) {
        switch (id) {
            case "1":
                return tunes[0];
            case "2":
                return tunes[1];
            default:
                return tunes[1];
        }
    }

    async getTunes(key) {
        switch (key) {
            case "1":
                return { tunes: tunes.slice(1) };
            case "2":
                return { tunes: tunes.slice(0, 1) };
            default:
                return { tunes };
        }
    }

    async getText(key) {
        return { text: ["לכה דודי", "שמור וזכור", "לקראת שבת"] };
    }

    getMetadata(key) {
        return {
            name: "לכה דודי",
            next: "kabbalat_shabbat.9",
            prev: null,
            sections: ["kabbalat_shabbat.8", "kabbalat_shabbat.9"],
        };
    }
}
