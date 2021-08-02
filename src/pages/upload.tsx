import React, { useState } from 'react'

async function postImage({ image, description }) {
  const formData = new FormData()
  formData.append('image', image)
  const result = await fetch('/api/upload', {
    method: 'POST',
    body: formData,
  }).then(response => response.json())
  return result.data
}

const upload = () => {
  const [file, setFile] = useState()
  // console.log('🚀 ~ file: upload.tsx ~ line 18 ~ upload ~ file', file)
  const [description, setDescription] = useState('')
  const [images, setImages] = useState([])

  const submit = async event => {
    event.preventDefault()
    const result = await postImage({ image: file, description })
    // setImages([result.image, ...images])
  }

  const fileSelected = event => {
    const file = event.target.files[0]
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

      {/* <img src="/images/9fa06d3c5da7aec7f932beb5b3e60f1d"></img> */}
    </div>
  )
}

export default upload
