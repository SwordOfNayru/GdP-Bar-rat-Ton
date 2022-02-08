module.exports = () => {
    let base = document.location.host;
    base = base.split(":")[0];
    let port = 443;
    return `http://${base}:${port}/api`;
};
