export const useLocalStorage = (key) => {

    const setItem = (value) => {
        const now = new Date ()
        const expiration = new Date(now.getTime() + 60 * 6000)
        const item = {
          value: value,
          expiration: expiration.getTime()
        }   
        localStorage.setItem(key, JSON.stringify(item))
    }

    const verifyExpiration = async (key) => {
        return new Promise((resolve)=> {
            if (localStorage.getItem(key) !== null) {
                const now = new Date ()
                const nowConvert = now.getTime()
                const data = JSON.parse(localStorage.getItem(key))
                const expiration = data.expiration
                nowConvert > expiration ? localStorage.setItem(key, "false") : localStorage.setItem(key, "true")
                resolve()
            } else {
                localStorage.setItem(key, "false")
                resolve()
            }
        })
    }

    return { setItem, verifyExpiration }
} 

