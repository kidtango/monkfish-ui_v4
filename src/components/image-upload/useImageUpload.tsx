import React from 'react'
import { Storage } from 'aws-amplify'

const useImageUpload = () => {
  const [imageUrl, setImageUrl] = React.useState(null)

  const onchange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return
    const file = e.target.files[0]
    res = await Storage.put(file!.name, file, {
      contenType: 'image/png',
    })
    setImageUrl(res)
  }

  return imageUrl
}

export default useImageUpload
