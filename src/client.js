import { createClient } from '@sanity/client'
// Import using ESM URL imports in environments that supports it:
// import {createClient} from 'https://esm.sh/@sanity/client'

const client = createClient({
    projectId: 'qpjukq1f',
    dataset: 'production',
    useCdn: true, // set to `true` to fetch from edge cache
    apiVersion: '2023-04-14', // use current date (YYYY-MM-DD) to target the latest API version
})

export default client
