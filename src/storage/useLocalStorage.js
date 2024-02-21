export const useLocalStorage = (key) => {
    const getItem = () => {
        const storedData = localStorage.getItem(key);
        if (storedData !== null) {
            const data = JSON.parse(storedData);
            const now = new Date().getTime();
            if (now > data.expiration) {
                data.expired = true;
                localStorage.setItem(key, JSON.stringify(data));
                console.log(`${key} ha expirado.`);
            }
            return data;
        }
        return null;
    };

    const setItem = (value) => {
        const now = new Date().getTime();
        const expiration = now + 3600000;
        const item = {
            value: value,
            expiration: expiration,
            expired: false,
        };
        localStorage.setItem(key, JSON.stringify(item));
        console.log(`${key} ha sido establecido.`);
    };

    return { getItem, setItem };
};
