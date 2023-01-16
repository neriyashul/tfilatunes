// import { useQuery } from "react-query";

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

    async getTunes(key) {
        return { tunes: ["tune1", "tune2", "tune3"] };
    }

    async getText(key) {
        return { text: ["לכה דודי","שמור וזכור", "לקראת שבת"]}
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
