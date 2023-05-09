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
import { Helmet } from "react-helmet-async";
import { useLayoutEffect } from "react";

export default function PageCollection({ setHeader }) {
    const param = useParams();
    const key = param.key;

    const collection = collections[key];
    if (!key || !collection) return <NotFound />;

    useLayoutEffect(() => setHeader(collection.name), [collection]);

    return (
        <List>
            <Helmet>
                <title>מנגינות לתפילות {collection.name}</title>
                <meta
                    name="description"
                    content={`רשימת שירים ומנגינות לתפילות ל${collection.name} - שירים ומנגינות מכל הזמנים, כמו: קרליבך, שירים חסידיים וארץ ישראליים`}
                />
            </Helmet>
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
