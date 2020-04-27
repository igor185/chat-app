import {fetchHeaderConfig} from "./index";

const request: typeof fetch = async (input: RequestInfo, init?: RequestInit | undefined) => {
    let headers: HeadersInit = init && init.headers ? {...fetchHeaderConfig().headers, ...init.headers } : fetchHeaderConfig().headers as HeadersInit;
    console.log(init, { ...(init || {}), headers});
    if(init && init.body) {
        headers = new Headers({'Content-Type': 'application/json', ...headers});
    }

    const promise = await fetch(input, { ...(init || {}), headers});

    // if(promise.status === 401){
    //     localStorage.removeItem("token");
    //     return window.location.reload();
    // }
    if(!promise.ok){
        console.error(promise);
        console.log(await promise.json())
        throw new Error(promise.statusText + " " + promise.status);
    }
    return await promise.json();
};
export default request;