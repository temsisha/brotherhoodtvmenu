import { createClient  } from "next-sanity";
import { config } from "./config";

export const sanityClient = createClient(config)

export const previewClient = createClient({
    ...config,
    useCdn: false, 
    token: 'skekVWfbrLqDiZpEe1FcZ8tszk7Bk8JYog4zy1KWI1m5jx7i6FSn1bmEUWwXnYOjcSodUy6YmTQ9qHBUJJjtWak7KhsjlLqPRs481WqWiI8TXUlqSQj7rSJg5kHlZHnnVES9aIZ6P3N4nbeMCUr6Mv0AVpJx52aFillnDEKrhB3QMkp2p3kY'
})

export const getClient = ( usePreview ) => usePreview ? previewClient : sanityClient