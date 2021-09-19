export const getLocalStorage = (str)=>{
    try {
        return localStorage.getItem(str);
    } catch (error) {
        // cookie is blocked
        return false;
    }
}

export const setLocalStorage = (str,val)=>{
    try {
        localStorage.setItem(str,val);
        return true;
    } catch (error) {
        // cookie is blocked
        return false;
    }
}
export const isCookie=()=>{
    try {
        return Boolean(localStorage);
    } catch (error) {
        return false;
    }
}

