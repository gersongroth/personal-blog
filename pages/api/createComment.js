import sanityClient from '@sanity/client'
const config = {
  dataset: process.env.SANITY_STUDIO_API_DATASET,
  projectId: process.env.SANITY_STUDIO_API_PROJECT_ID,
  token: process.env.SANITY_API_TOKEN,
  apiVersion: new Date().toISOString().slice(0, 10),
}
const client = sanityClient(config)

export default async function createComment(req, res) {
  const { _id, name, email, comment} = JSON.parse(req.body)
  try {
    await client.create({
      _type: 'comment',
      post: {
        _type: 'reference',
        _ref: _id,
      },
      name,
      email,
      comment
    })
  } catch (err) {
    console.error(err)
    return res.status(500).json({message: `Couldn't submit comment`, err})
  }
  return res.status(200).json({ message: 'Comment submitted' })
}
