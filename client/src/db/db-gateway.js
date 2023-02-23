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
        const tunes = [
            {
                id: "1",
                name: "דוד מלך ישראל",
                composer: "ר' שלמה קרליבך",
                link: "https://youtu.be/lBfa7fGPpxQ?t=24",
                image: "https://i.ytimg.com/vi/lBfa7fGPpxQ/mqdefault.jpg",
                rate: "5",
            },
            {
                id: "2",
                name: "לכה דודי",
                composer: "מודז'יץ",
                link: "https://youtu.be/FLZXap_0zlw?t=5",
                image: "https://i.ytimg.com/vi/FLZXap_0zlw/mqdefault.jpg",
                rate: "4",
            },
            {
                id: "3",
                name: "לכה דודי",
                composer: "מודז'יץ",
                link: "https://youtu.be/FLZXap_0zlw?t=5",
                image: "https://i.ytimg.com/vi/FLZXap_0zlw/mqdefault.jpg",
                rate: "4",
            },
            {
                id: "4",
                name: "לכה דודי",
                composer: "מודז'יץ",
                link: "https://youtu.be/FLZXap_0zlw?t=5",
                image: "https://i.ytimg.com/vi/FLZXap_0zlw/mqdefault.jpg",
                rate: "4",
            },
            {
                id: "5",
                name: "לכה דודי",
                composer: "מודז'יץ",
                link: "https://youtu.be/FLZXap_0zlw?t=5",
                image: "https://i.ytimg.com/vi/FLZXap_0zlw/mqdefault.jpg",
                rate: "4",
            },
            {
                id: "6",
                name: "לכה דודי",
                composer: "מודז'יץ",
                link: "https://youtu.be/FLZXap_0zlw?t=5",
                image: "https://i.ytimg.com/vi/FLZXap_0zlw/mqdefault.jpg",
                rate: "4",
            },
            {
                id: "7",
                name: "לכה דודי",
                composer: "מודז'יץ",
                link: "https://youtu.be/FLZXap_0zlw?t=5",
                image: "https://i.ytimg.com/vi/FLZXap_0zlw/mqdefault.jpg",
                rate: "4",
            },
            {
                id: "8",
                name: "לכה דודי",
                composer: "מודז'יץ",
                link: "https://youtu.be/FLZXap_0zlw?t=5",
                image: "https://i.ytimg.com/vi/FLZXap_0zlw/mqdefault.jpg",
                rate: "4",
            },
            {
                id: "9",
                name: "לכה דודי",
                composer: "מודז'יץ",
                link: "https://youtu.be/FLZXap_0zlw?t=5",
                image: "https://i.ytimg.com/vi/FLZXap_0zlw/mqdefault.jpg",
                rate: "4",
            },
            {
                id: "10",
                name: "לכה דודי",
                composer: "מודז'יץ",
                link: "https://youtu.be/FLZXap_0zlw?t=5",
                image: "https://i.ytimg.com/vi/FLZXap_0zlw/mqdefault.jpg",
                rate: "4",
            },
            {
                id: "11",
                name: "לכה דודי",
                composer: "מודז'יץ",
                link: "https://youtu.be/FLZXap_0zlw?t=5",
                image: "https://i.ytimg.com/vi/FLZXap_0zlw/mqdefault.jpg",
                rate: "4",
            },
            {
                id: "12",
                name: "לכה דודי",
                composer: "מודז'יץ",
                link: "https://youtu.be/FLZXap_0zlw?t=5",
                image: "https://i.ytimg.com/vi/FLZXap_0zlw/mqdefault.jpg",
                rate: "4",
            },
        ];
        switch(key) {
            case 1: 
                return {tunes: tunes.slice(1)}
            case 2: 
                return {tunes: tunes.slice(0,1)}
            default: 
                return {tunes}
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
