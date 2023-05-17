import React from "react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

export default function Head({ title, description, canonical = true }) {
    const location = useLocation();
    const url = `https://tfilatunes.com${location.pathname}${location.search}${location.hash}`;
    return (
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />
            {canonical && <link rel="canonical" href={url} />}
        </Helmet>
    );
}
