import React, { useState } from 'react'
import useImageKitUrl from 'src/hooks/useImageKitUrl'
import useUploadImage from 'src/hooks/useUploadImage'

const upload = () => {
  const [file, setFile] = useState()
  // console.log('🚀 ~ file: upload.tsx ~ line 18 ~ upload ~ file', file)
  const [description, setDescription] = useState('')
  const [images, setImages] = useState([])
  const imagekitUrl = useImageKitUrl()

  const testImage =
    imagekitUrl +
    'posts/wallpaperflare.com_wallpaper (2).jpg-cc0a17bd-e16f-4d31-85de-aaa93190f087'

  const submit = async event => {
    event.preventDefault()

    if (!file) return

    const result = await useUploadImage(file!, 'posts')
    console.log('🚀 ~ file: upload.tsx ~ line 22 ~ upload ~ result', result)
    // setImages([result.image, ...images])
  }

  const fileSelected = event => {
    const file = event.target.files[0]
    console.log(file)
    setFile(file)
  }

  return (
    <div className="App">
      <form onSubmit={submit}>
        <input onChange={fileSelected} type="file" accept="image/*"></input>
        <input
          value={description}
          onChange={e => setDescription(e.target.value)}
          type="text"
        ></input>
        <button type="submit">Submit</button>
      </form>

      {images.map(image => (
        <div key={image}>
          <img src={image}></img>
        </div>
      ))}
      <img src={testImage}></img>
    </div>
  )
}

export default upload
