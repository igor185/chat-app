import {fetchHeaderConfig} from "./index";

const request: typeof fetch = async (input: RequestInfo, init?: RequestInit | undefined) => {
    let headers: HeadersInit = init && init.headers ? {...fetchHeaderConfig().headers, ...init.headers } : fetchHeaderConfig().headers as HeadersInit;
    if(init && init.body) {
        headers = new Headers({'Content-Type': 'application/json', ...headers});
    }

    let promise = await fetch(input, { ...(init || {}), headers});

    if(!promise.ok){
        console.error(promise);

        const message = await promise.json();

        console.log(message);

        if(message.message === "Token has expired") {
            localStorage.removeItem("token");

            return window.location.reload();
        }
        // @ts-ignore
        throw new Error(message.message || message[0]);
    }
    return await promise.json();
};
export default request;