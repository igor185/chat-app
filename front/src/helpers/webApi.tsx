const request: typeof fetch = async (input: RequestInfo, init?: RequestInit | undefined) => {
    const promise = await fetch(input, init);
    if(!promise.ok){
        console.error(promise);
        throw new Error(promise.statusText + " " + promise.status);
    }
    return await promise.json();
};
export default request;