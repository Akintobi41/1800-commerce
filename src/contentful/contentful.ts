import { createClient,Entry, EntryCollection } from "contentful";

const spaceId = import.meta.env.VITE_SPACE_KEY;
const apiKey = import.meta.env.VITE_API_KEY;

const client = createClient({
    space: spaceId,
    accessToken: apiKey,
});

export async function fetchAllData(type:string):Promise<EntryCollection<any>>{ //fetch all content
    try {
        const res = await client.getEntries({
            content_type: type,
        })
        if (!res) throw Error('No response from contentful');
        return res;
    } catch (error) {
        handleError(error)
        throw new Error('Failed to fetch all data')
    }
}


export async function fetchData(id:string): Promise<Entry<any>> {  //single content
    try {
        const res = await client.getEntry(id)
        if (!res) throw Error('No response from contentful');
        return res;
    } catch (error) {
        handleError(error)
        throw new Error('Failed to fetch data')
    }
}

function handleError(error: unknown) {
    if (typeof error === 'string') {
        throw new Error(error);
    } else if (error instanceof Error) {
        throw new Error(error.message);
    } else {
        throw new Error('An unknown error occurred');
    }
}


