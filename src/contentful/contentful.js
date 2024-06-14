import { createClient } from "contentful";

let numTimes = 0; 
let num = 0;
const spaceId = import.meta.env.VITE_SPACE_KEY;
const apiKey = import.meta.env.VITE_API_KEY;

const client = createClient({
    space: spaceId,
    accessToken: apiKey,
});

export async function fetchAllData(type) { //fetch all content
    ++numTimes;
    try {
        const res = await client.getEntries({
            content_type: type,
        })
        if (!res) throw Error();
        return res;
    } catch (error) {
        if (numTimes < 4) {
            await fetchAllData();
            return;
        }
    }
}


export async function fetchData(id) {  //single content
    ++num;
    try {
        const res = await client.getEntry(id)
        if (!res) throw Error();
        return res;
    } catch (error) {

        if (num < 4) {
        await fetchData();
            return;
        }
    }
    
}

