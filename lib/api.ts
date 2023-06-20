const fetcher = async ({url, method, body, json = true}: any) => {
    const res = await fetch(url, {
        method,
        body: body && JSON.stringify(body),
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    });

    if (!res.ok) {
        throw new Error('API Error');
    }

    if (json) {
        return await res.json();
    }
}

export const register = async (user: any) => {
    return fetcher({
        url: "/api/register",
        method: "POST",
        body: user,
        json: false,
    });
}

export const signin = async (user: any) => {
    return fetcher({
        url: "/api/signin",
        method: "POST",
        body: user,
        json: false,
    });
}
