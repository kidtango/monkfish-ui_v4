interface IUseUploadImage {
  Bucket: string
  Etag: string
  Location: string
  Key: string
  key: string
}

async function useUploadImage(
  image: string | Blob,
  folderName: string,
): Promise<IUseUploadImage> {
  const formData = new FormData()
  formData.append('image', image)
  formData.append('folder', folderName)

  const result: IUseUploadImage = await fetch('/api/upload', {
    method: 'POST',
    body: formData,
  }).then(response => response.json())

  return result
}

export default useUploadImage
