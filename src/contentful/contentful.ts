import { Image, Product } from "@src/tsTypes/react-types";
import { createClient } from "contentful";

const spaceId = import.meta.env.VITE_SPACE_KEY;
const apiKey = import.meta.env.VITE_API_KEY;

const client = createClient({
  space: spaceId,
  accessToken: apiKey,
});

export async function fetchAllData(type: string) {
  try {
    const res = (await client.getEntries({
      content_type: type,
    })) as unknown as {
      items: { fields: Product; sys: { id: string } }[];
    };
console.log(res)
    return res.items.map((item) => {
      const { fields, sys } = item;
      
      return {
        id: sys.id,
        name: fields.name,
        price: fields.price,
        description: fields.description,
        type: fields.type,
        images: fields.images.map((img) => ({
          fields: { file: { url: img.fields.file.url } },
        })),
        quantity: 0,
      };
    });
  } catch (error) {
    console.log(error);
  }
}

export async function fetchData(id: string) {
  try {
    const res = (await client.getEntry(id)) as unknown as {
      fields: Product;
      sys: { id: string };
    };
console.log(res)
    const { fields } = res;

    return {
      id: res.sys.id,
      name: fields.name,
      price: fields.price,
      description: fields.description,
      type: res.fields.type,
      images: fields.images.map((img) => ({
        fields: { file: { url: img.fields.file.url } },
      })),
      quantity: 0,
    };
  } catch (error) {
    console.log(error);
  }
}
