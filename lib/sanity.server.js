import { createClient  } from "next-sanity";
import { config } from "./config";

export const sanityClient = createClient(config)

export const previewClient = createClient({
    ...config,
    useCdn: false, 
    token: 'sky7m0Cb2KNodbMtsucdL1ZsTWeHiVjMiwb3zF8VuDktkdN6thp5Qk7JZVdkLhv5CWmEtGW29CiqlvgCmzPGzlBsNBGwTu0ghBton74V3CkWz4mP56dcDaEg3Ou3qXYdTwLJWsCsnbDfkIl5zWbyIEP3JMuJlYAf0n9hZ422t3wboHYQDjjw'
})

export const getClient = ( usePreview ) => usePreview ? previewClient : sanityClient
