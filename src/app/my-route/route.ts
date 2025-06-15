import configPromise from '@payload-config'
import { getPayload } from 'payload'

export const GET = async () => {
  const payload = await getPayload({
    config: configPromise,
  })

  const data = await payload.find({
    collection: "categories",
  })

  return Response.json(data)
}


  // depth: 1, // 0 = flat sub-document, 1 or more = Populate subcategories
  //   where: {
  //     parent: {
  //       exists: false,
  //     },
  //   },