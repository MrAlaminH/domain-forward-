addEventListener("fetch", event => {
    event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
    const url = new URL(request.url);
    url.hostname = "retro-folio.vercel.app";

    const init = {
        method: request.method,
        headers: request.headers,  // Forward all original headers
        body: request.body,        // Include body for POST, PUT, etc.
        redirect: 'follow'
    };

    const modifiedRequest = new Request(url.toString(), init);
    return fetch(modifiedRequest);
}
