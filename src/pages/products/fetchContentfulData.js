import { createClient } from "contentful";

let numTimes = 0;
// const spaceId = import.meta.env.VITE_SPACE_KEY;
// const apiKey = import.meta.env.VITE_API_KEY;

const client = createClient({
    space: spaceId,
    accessToken: apiKey,
});