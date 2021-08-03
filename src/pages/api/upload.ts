import { NextApiRequest, NextApiResponse } from 'next'
import multer from 'multer'
import runMiddleware from './utils/runMiddleware'
import { putObject } from './utils/s3'
import { v4 as uuidv4 } from 'uuid'

interface RequestWithFile extends NextApiRequest {
  file?: any
}

const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    // Max file size (1 mb)
    fileSize: 1024 * 1024,
  },
})

export const config = {
  api: {
    bodyParser: false,
  },
}

const handler = async (req: RequestWithFile, res: NextApiResponse) => {
  try {
    if (req.method === 'POST') {
      await runMiddleware(req, res, upload.single('image'))

      const { folder = 'upload' } = req?.body

      if (!req.file) return res.status(400).json({ error: 'File empty' })

      const { originalname, buffer } = req.file

      if (!originalname)
        return res.status(400).json({ error: 'FileName empty' })

      const uploadResult = await putObject(
        process.env.S3_BUCKET || '',
        `${folder}/${originalname}-${uuidv4()}`,
        buffer,
      )

      return res.json(uploadResult)
    }

    return res.status(404).json({ error: '404 not found' })
  } catch (err) {
    return res.status(500).json({ error: err.name, message: err.message })
  }
}

export default handler
