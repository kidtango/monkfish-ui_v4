import React, { useState } from 'react'

async function postImage({ image, description }) {
  const formData = new FormData()
  formData.append('image', image)
  formData.append('folder', 'posts')
  const result = await fetch('/api/upload', {
    method: 'POST',
    body: formData,
  }).then(response => response.json())
  return result
}

const upload = () => {
  const [file, setFile] = useState()
  // console.log('🚀 ~ file: upload.tsx ~ line 18 ~ upload ~ file', file)
  const [description, setDescription] = useState('')
  const [images, setImages] = useState([])

  const submit = async event => {
    event.preventDefault()
    const result = await postImage({ image: file, description })
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
    </div>
  )
}

export default upload
