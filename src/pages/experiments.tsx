import React, { useState, useEffect } from 'react'
import { Storage } from 'aws-amplify'
import Image from 'next/image'

const experiments = () => {
  const [images, setImages] = useState([])
  useEffect(() => {
    fetchImages()
  }, [])
  async function fetchImages() {
    let imageKeys = await Storage.list('wallpaperflare.com_wallpaper (2).jpg')
    console.log(
      '🚀 ~ file: experiments.tsx ~ line 14 ~ fetchImages ~ imageKeys',
      imageKeys,
    )
    imageKeys = await Promise.all(
      imageKeys.map(async k => {
        const key = await Storage.get(k.key)
        return key
      }),
    )
    console.log('imageKeys: ', imageKeys)
    setImages(imageKeys)
  }

  async function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (!e.target.files) return

    const file = e.target.files[0]
    const result = await Storage.put(file!.name, file, {
      contentType: 'image/png',
    })
    console.log({ result })
    fetchImages()
  }

  const handleClick = async () => {
    const data = await fetch('/api/examples/helloWorld').then(res => res.json())
    console.log(
      '🚀 ~ file: experiments.tsx ~ line 39 ~ handleClick ~ res',
      data,
    )
  }
  return (
    <div className="App">
      <h1>Test</h1>
      <div>
        {images.map(image => (
          <Image src={image} key={image} height={300} width={300} />
        ))}
      </div>
      <input type="file" onChange={onChange} />
      <button onClick={handleClick}>test api</button>
    </div>
  )
}

export default experiments
