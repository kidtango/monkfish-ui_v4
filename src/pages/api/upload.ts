import { NextApiRequest, NextApiResponse } from 'next'
import multerS3 from 'multer-s3'
import multer from 'multer'
import runMiddleware from './utils/runMiddleware'
import uploadS3 from './utils/uploadS3'
import { S3 } from 'aws-sdk'

const s3 = new S3({ apiVersion: '2006-03-01' })

interface RequestWithFile extends NextApiRequest {
  file?: any
}

const upload = multer({
  dest: 'uploads/',
})

const handler = async (req: RequestWithFile, res: NextApiResponse) => {
  try {
    if (req.method === 'POST') {
      await runMiddleware(req, res, upload.single('image'))
      console.log('🚀 ~ file: upload.ts ~ line 28 ~ handler ~ req', req.file)

      if (!req.file) return res.status(400).json({ error: 'File empty' })

      const { fileName } = req.body
      console.log(
        '🚀 ~ file: upload.ts ~ line 35 ~ handler ~ fileName',
        fileName,
      )

      if (!fileName) return res.status(400).json({ error: 'FileName empty' })

      const uploadResult = (await uploadS3(
        process.env.BUCKET_NAME || '',
        fileName,
        req.body,
      )) as { Location: string }

      return res.json({ src: uploadResult.Location, error: '' })
    }

    return res.status(404).json({ error: '404 not found' })
  } catch (err) {
    return res.status(500).json({ error: err.name, message: err.message })
  }
}

export default handler
