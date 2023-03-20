export function joinURLs(url1, url2) {
    if (!url1 || !url2) return null;
    return removeTrailingSlash(url1) + "/" + removeLeadingSlash(url2);
}

function removeLeadingSlash(url) {
    return url[0] == "/" ? (url = url.substr(1)) : url;
}

function removeTrailingSlash(url) {
    return url[url.length - 1] == "/" ? url.substr(0, url.length - 1) : url;
}
