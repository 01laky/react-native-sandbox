export const requireAppContainer = (container) => {
    console.log('CONTAINER => ', container);
    return require(`./modules/${container}`);
}
