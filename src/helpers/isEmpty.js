export const isEmpty = (obj) => {
    if (obj === null || obj === undefined) {
        return true;
    }

    if (typeof obj === 'string') {
        return obj.trim().length === 0;
    }

    if (typeof obj === 'number') {
        return false;
    }

    if (typeof obj === 'boolean') {
        return false;
    }

    if (typeof obj === 'object') {
        return Object.keys(obj).length === 0;
    }
};
