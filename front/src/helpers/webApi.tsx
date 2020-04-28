import {fetchHeaderConfig} from "./index";

const request: typeof fetch = async (input: RequestInfo, init?: RequestInit | undefined) => {
    let headers: HeadersInit = init && init.headers ? {...fetchHeaderConfig().headers, ...init.headers } : fetchHeaderConfig().headers as HeadersInit;
    if(init && init.body) {
        headers = new Headers({'Content-Type': 'application/json', ...headers});
    }

    let promise = await fetch(input, { ...(init || {}), headers});
    console.log(promise)
    //Token has expired
    // if(promise.status === 401){
    //     localStorage.removeItem("token");
    //     return window.location.reload();
    // }
    if(!promise.ok){
        console.error(promise);
        const message = await promise.json();
        console.log(message);
        // @ts-ignore
        throw new Error(message.message);
    }
    return await promise.json();
};
export default request;