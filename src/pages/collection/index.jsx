import {
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Paper,
} from "@mui/material";
import React from "react";
import { Link, useParams } from "react-router-dom";
import collections from "./collections.json";
import NotFound from "../404";
import styles from "./style";
import { useLayoutEffect } from "react";
import Head from "../../components/head";

export default function PageCollection({ setHeader }) {
    const param = useParams();
    const key = param.key;

    const collection = collections[key];
    if (!key || !collection) return <NotFound />;

    useLayoutEffect(() => setHeader(collection.name), [collection]);

    return (
        <List>
            <Head
                title={`מנגינות לתפילות ${collection.name}`}
                description={`רשימת שירים ומנגינות לתפילות ל${collection.name} - שירים ומנגינות מכל הזמנים, כמו: קרליבך, שירים חסידיים וארץ ישראליים`}
            />
            {collection.pages?.map((page) => (
                <ListItem key={page.url} sx={{}}>
                    <Paper key={page.url} elevation={0} sx={styles.paper}>
                        <ListItemButton
                            variant="contained"
                            component={Link}
                            to={page.url}
                        >
                            <ListItemText
                                primary={page.name}
                                primaryTypographyProps={styles.text}
                            />
                        </ListItemButton>
                    </Paper>
                </ListItem>
            ))}
        </List>
    );
}
