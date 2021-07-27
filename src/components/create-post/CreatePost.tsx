import React, { useState, FC } from 'react'
import { BsImage } from 'react-icons/bs'
import { MdContentCopy } from 'react-icons/md'
import { useForm, SubmitHandler } from 'react-hook-form'
import { TiUpload } from 'react-icons/ti'
import { CopyToClipboard } from 'react-copy-to-clipboard'
// import Monkfish from '../components/icons/Monkfish'

import Button from 'src/components/buttons/Button'
import MonkfishLogo from 'src/components/nav/top-nav/MonkfishLogo'
import { Get_TagsQuery } from 'src/generated'
import Dropdown from 'src/components/dropdown/Dropdown'
import clsx from 'clsx'
import Tag from '../hashtag/Tag'
import Editor from '../editor/Editor'
import { filterObjectsByName } from 'src/utils/utility-Fn'

type Inputs = {
  title: string
  tags: string
}

const image =
  '![AltText](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/3wch7q89apxa49z3bkxk.jpg)'

interface ICreatePost {
  tags?: Get_TagsQuery['tags']
  createPost: <T>(args: T) => Promise<unknown>
}

const CreatePost: FC<ICreatePost> = ({ tags = [], createPost }) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<Inputs>()
  const [content, setContent] = useState<string>('')
  const [filteredTags, setFilteredTags] = useState<Get_TagsQuery['tags']>([])
  const [selectedTags, setSelectedTags] = useState<Get_TagsQuery['tags']>([])
  const [uploadedImg, setUploadedImg] = useState({
    value: image,
    copied: false,
  })

  const [isTagMenuOpen, setIsTagMenuOpen] = useState<boolean>(false)

  const onSubmit: SubmitHandler<Inputs> = args => {
    const tags = [{ tag_id: 1 }, { tag_id: 2 }]
    const isPublished = true
    const headerImage =
      'https://www.hakaimagazine.com/wp-content/uploads/header-vr-coral-beauty.jpg'
    const newPost = {
      ...args,
      content,
      hashTags: tags,
      headerImage,
      isPublished: true,
    }

    createPost({
      variables: {
        author_id: '109851137750146210943',
        header_image: headerImage,
        title: args.title,
        content,
        is_published: isPublished,
      },
    })
  }

  const handleTagSearch = (ev: React.ChangeEvent<HTMLInputElement>) => {
    const targetValue = ev.target.value.toLowerCase()
    if (targetValue) {
      setIsTagMenuOpen(true)
    } else {
      setIsTagMenuOpen(false)
    }

    const _filteredTags = filterObjectsByName(targetValue, tags) || []

    setFilteredTags(_filteredTags)
  }

  const handleAddTags = (id: number) => {
    const selectedTag = tags.find(tag => tag.id === id)
    if (!selectedTag) return
    // Add tag if it's not already in the list
    const hasTag = selectedTags.indexOf(selectedTag) === 1
    if (!hasTag) {
      setSelectedTags(prevState => [...prevState, selectedTag])
      setValue('tags', '')
      setIsTagMenuOpen(false)
    }
  }

  const handleDelete = (id: number) => {
    setSelectedTags(prevState => prevState.filter(tag => tag.id !== id))
  }

  return (
    <div className="flex flex-col h-screen bg-gray-200">
      <div className="container h-full mx-auto">
        <div className="flex items-center justify-between p-4 space-x-6">
          <div className="p-2 mt-2 roundedbg-ebonyClay-600">
            <MonkfishLogo />
          </div>
          <div className="text-xl font-bold text-primary-400">CREATE POST</div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="p-6">
            <div className="border rounded-md shadow bg-gray-50">
              <div className="px-10 my-8">
                <Button buttonType="plain" size="medium" type="button">
                  <BsImage />
                  <span>Add a cover image</span>
                </Button>
              </div>
              <div className="px-10 my-4 mb-4">
                <input
                  className={inputStyles(!!errors.title)}
                  placeholder="New Post Title..."
                  type="text"
                  {...register('title', { required: true })}
                />
              </div>
              <div className="w-full px-10 mb-10 text-gray-600">
                <input
                  className="block w-full mb-2 border-0 outline-none bg-gray-50"
                  type="text"
                  placeholder="Add up to four tags..."
                  {...register('tags')}
                  onChange={handleTagSearch}
                />

                <Dropdown
                  isOpen={isTagMenuOpen}
                  items={filteredTags}
                  handleClick={handleAddTags}
                />
                <div className="flex space-x-2">
                  {selectedTags?.map(tag => (
                    <Tag tag={tag} key={tag.id} onDelete={handleDelete} />
                  ))}
                </div>
              </div>
              <div className="flex items-center max-w-full px-10 py-2 mb-5 space-x-4 text-gray-500 bg-gray-100">
                <Button buttonType={'plain'} size="medium" type="button">
                  <BsImage />
                  <span>Upload image</span>
                </Button>

                <div className="p-2 rounded ring ring-gray-300 ">
                  {uploadedImg.value}
                </div>
                <CopyToClipboard
                  text={uploadedImg.value}
                  onCopy={() => setUploadedImg({ value: image, copied: true })}
                >
                  <Button buttonType={'primary'} type="button" size="medium">
                    <MdContentCopy />
                    <span>{uploadedImg.copied ? 'Copied' : 'Copy...'}</span>
                  </Button>
                </CopyToClipboard>
              </div>
              <div className="px-10 py-4 mb-6">
                <Editor setContent={setContent} content={content} />
                <div className="flex mt-6 space-x-4">
                  <Button buttonType="primary" size="medium" type="submit">
                    <TiUpload />
                    <span>Publish</span>
                  </Button>
                  <Button buttonType="plain" size="medium" type="button">
                    Save Draft
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CreatePost

function inputStyles(hasError: boolean) {
  const base =
    'block w-full text-4xl font-bold text-gray-700 border-0 bg-gray-50 focus:outline-none'
  const error = 'border-b-2 border-pink-600'
  return clsx(base, hasError && error)
}
