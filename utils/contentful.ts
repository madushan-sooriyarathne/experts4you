import { Asset, ContentfulClientApi, Entry, EntryCollection } from "contentful";

// contentful client
const client: ContentfulClientApi = require("contentful").createClient({
  space: process.env.CONTENTFUL_SPACE_ID as string,
  accessToken: process.env.CONTENTFUL_DELIVERY_API_TOKEN as string,
});

/**
 * Fetch on single entry from contentful using entry ID
 * @param {string} entryId entry ID
 * @returns {Promise<T>} a promise that resolve to a generic object
 */
async function getSingleEntry<T>(entryId: string): Promise<T> {
  try {
    const data: Entry<T> = await client.getEntry(entryId);
    const fetchedData: T = data.fields;
    return fetchedData;
  } catch (error: any) {
    throw Error("Error fetching the entry with given ID");
  }
}

/**
 * Fetch all entries in a content model using content model ID
 * @param {string} contentType content model ID
 * @returns {Promise<T[]>} a promise that resolve to a generic object array
 */
async function getMultipleEntries<T>(contentType: string): Promise<T[]> {
  let fetchedData: T[] = [];

  try {
    const data: EntryCollection<T> = await client.getEntries({
      content_type: contentType,
    });

    fetchedData = data.items.map((entry: Entry<T>): T => entry.fields);
  } catch (error: any) {
    console.error(`Error occurred - ${error.message}`);
  }

  return fetchedData;
}

/**
 * Fetch one or multiple entries using a query
 * @param {object} query a query in a object format.
 * @returns {Promise<T[] | T>} a promise that resolve to a generic object or object array
 */
async function getEntriesFromQuery<T>(query: Object): Promise<T[] | T> {
  let fetchedData: T[] | T = [];
  try {
    const data: EntryCollection<T> = await client.getEntries(query);

    if (data.items.length < 1) {
      // Return an empty array if no items returned from contentful query
      fetchedData = [];
    } else if (data.items.length === 1) {
      // Select the fields of first item if only one item returned from contentful query
      fetchedData = data.items[0].fields;
    } else {
      fetchedData = data.items.map((item: Entry<T>) => item.fields);
    }
  } catch (error: any) {
    console.error(`Error occurred - ${error.message}`);
  }

  return fetchedData;
}

/**
 * Extract the url from given asset fields
 * @param obj data object that fetched from contentful
 * @param fields Asset fields that need to extract the url
 * @returns {K} generic object that assets has been converted to url strings
 */
function serializeAssetUrls<T, K>(obj: T, ...fields: string[]): K {
  // create a shallow copy of the object
  const cloneObject: { [key: string]: any } = { ...obj };

  for (let [key, value] of Object.entries(cloneObject)) {
    if (fields.includes(key)) {
      // serialize the object

      // check if the value is a array
      if (value instanceof Array) {
        cloneObject[key] = value.map((item: Asset) => getAssetUrl(item));
      } else {
        cloneObject[key] = getAssetUrl(value);
      }
    }
  }

  return cloneObject as K;
}

/**
 * get url of a asset using asset Id
 * @param assetId Id of the asset that need to be fetched
 * @returns {string} url of the asset if fetched successfully otherwise default fallback image url
 */
async function getSingleAsset(assetId: string): Promise<string> {
  let assetURL: string = "/static/img/fallback-img.webp";

  try {
    const asset: Asset = await client.getAsset(assetId);
    if (asset) {
      assetURL = asset.fields.file.url;
    }
  } catch (error: any) {
    console.error(`an error occurred - ${error.message}`);
  } finally {
    return assetURL;
  }
}

function getAssetUrl(asset: Asset): string {
  return asset.fields.file.url.replace("//", "https://");
}

export {
  getSingleEntry,
  getMultipleEntries,
  getEntriesFromQuery,
  serializeAssetUrls,
  getAssetUrl,
  getSingleAsset,
};
