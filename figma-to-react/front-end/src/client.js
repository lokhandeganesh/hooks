import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: '6o5se5og',//import.meta.env.VITE_PROJECT_ID,
  dataset: 'production',
  apiVersion: '2024-11-06',
  token: 'skYgXM0JQGpuBfgXeefT5w8ilNcuGvQHVuF7X6e4Fmi0rqb2SWUVDQiAyumAE5KnGJkBpOmj0ievfe7CHUELZWoxN3mZjHghKvGI3MCNJrNdRVfMxLDhtHEnDYckraOk2OyTmgDWuO8bfNb0D1Hng3ryaYpsv9f9mICQi4Ax8PbHuPfyyYvf',//import.meta.env.VITE_PROJECT_TOKEN,
  useCdn: true
})

const builder = imageUrlBuilder(client);
export const urlFor = (source) => {
  return builder.image(source);
}