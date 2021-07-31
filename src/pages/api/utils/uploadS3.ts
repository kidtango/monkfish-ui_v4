import { config, S3 } from 'aws-sdk'

// Set the region (other credentials are in process.env)
config.update({ region: 'ap-northeast-2' })

// Create S3 service object
const s3 = new S3({ apiVersion: '2006-03-01' })

const upload = async (bucket: string, fileName: string, body: Buffer) => {
  console.log('🚀 ~ file: uploadS3.ts ~ line 10 ~ upload ~ body', body)
  console.log('🚀 ~ file: uploadS3.ts ~ line 10 ~ upload ~ fileName', fileName)
  return new Promise((resolve, reject) => {
    s3.upload(
      {
        Bucket: bucket,
        Key: fileName,
        Body: body,
        ACL: 'public-read',
      },
      (err, data) => {
        if (err) reject(err)
        else resolve(data)
      },
    )
  })
}

export default upload
