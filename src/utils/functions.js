export const getBreakPoint = (screens) => {
    const breakpoints = [];
    for (const key in screens) {
        if (screens[key]) {
            const element = screens[key];
            if (element) {
                breakpoints.push(key);
            }
        }
    }
    return breakpoints;
};
