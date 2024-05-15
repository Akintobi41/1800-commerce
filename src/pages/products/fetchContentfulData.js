import { createClient } from "contentful";

let numTimes = 0;
const spaceId = import.meta.env.VITE_SPACE_KEY;
const apiKey = import.meta.env.VITE_API_KEY;

const client = createClient({
    space: spaceId,
    accessToken: apiKey,
});

export async function fetchContentfulData(type) {
    ++numTimes;
    try {
        const res = await client.getEntries({
            content_type: type,
        })
        if (!res) throw Error();
        return res;
    } catch (error) {
        if (numTimes < 4) {
            await fetchContentfulData();
            return;
        }
    }
}
