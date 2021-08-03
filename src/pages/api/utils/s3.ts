import { S3, config } from 'aws-sdk'

// Create S3 service object

config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
  signatureVersion: 'v4',
})

const s3 = new S3()

export const putObject = async (
  bucket: string,
  fileName: string,
  body: Buffer,
) => {
  return new Promise((resolve, reject) => {
    s3.upload(
      {
        Bucket: bucket,
        Key: fileName,
        Body: body,
      },
      (err, data) => {
        if (err) reject(err)
        else resolve(data)
      },
    )
  })
}

export const getSignedURL = async (bucket: string, fileName: string) => {
  return s3.getSignedUrl('getObject', {
    Bucket: bucket,
    Key: fileName,
    Expires: '',
  })
}
