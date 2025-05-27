export const normalizeURL = (url: string) => {
    const content = new URL(url);
    const hostPath = `${content.hostname}${content.pathname}`;

    if (!!hostPath.length && hostPath.slice(-1) === '/') {
        return hostPath.slice(0, -1);
    }

    return hostPath;
}