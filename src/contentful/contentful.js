import { createClient } from "contentful";

const spaceId = import.meta.env.VITE_SPACE_KEY;
const apiKey = import.meta.env.VITE_API_KEY;

const client = createClient({
    space: spaceId,
    accessToken: apiKey,
});

export async function fetchAllData(type) { //fetch all content
    try {
        const res = await client.getEntries({
            content_type: type,
        })
        if (!res) throw Error();
        return res;
    } catch (error) {
       throw new Error(error)
    }
}


export async function fetchData(id) {  //single content
    try {
        const res = await client.getEntry(id)
        if (!res) throw Error();
        return res;
    } catch (error) {
        throw new Error(error)
    }
    
}


