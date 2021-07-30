import type { NextApiRequest, NextApiResponse } from 'next'
import aws from 'aws-sdk'
import multer from 'multer'
import multerS3 from 'multer-s3'
import { FiAlignLeft } from 'react-icons/fi'

export default (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ name: 'John Doe' })
}

const uploadImage = multer({
  storage: multerS3({
    s3: new aws.S3(),
    bucket: 'public',
    metadata: (req, file, cb) => {
      cb(null, { fieldName: file.fieldname })
    },
    key: (req, file, cb) => {
      cb(null, Date.now().toString())
    },
  }),
})
