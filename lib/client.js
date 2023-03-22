import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url"
export const client=createClient({
    projectId:"y8nok8hp",
    dataset:"production",
    apiVersion:'2023-01-03',
    useCdn:true,
    token:process.env.SANITY_TOKEN
})
const builder=imageUrlBuilder(client);
export const urlFor=(source)=>builder.image(source)