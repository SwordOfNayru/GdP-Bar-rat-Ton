module.exports = () => {
    let base = document.location.origin;
    let port = 443;
    return `${base}:${port}/api`;
};
