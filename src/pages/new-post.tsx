import React, { useState } from 'react'
import { BsImage } from 'react-icons/bs'
import { useForm, SubmitHandler } from 'react-hook-form'
import { TiUpload } from 'react-icons/ti'

// import Monkfish from '../components/icons/Monkfish'
import Editor from '../components/editor/Editor'
import Tag, { Tag as TTag } from '../components/hashtag/Tag'
import Button from 'src/components/buttons/Button'
import MonkfishLogo from 'src/components/nav/top-nav/MonkfishLogo'
import {
  Get_TagsQuery,
  useCreate_PostMutation,
  useGet_TagsQuery,
} from 'src/generated'
import withAuth from 'src/components/auth/withAuth'
import Dropdown from 'src/components/dropdown/Dropdown'

// NOTE - Mock data

// const post: IPost = {
//   coverImage:
//     'https://dev-to-uploads.s3.amazonaws.com/uploads/articles/7i2lrdnxerljxo90usfh.jpg',
//   title: 'My Post',
//   hashTags: [],
//   content: 'Begin and end',
//   updatedAt: '2021-06-28T01:13:09.124Z',
// }

const tagsMockData = [
  {
    id: 1,
    name: 'LPS',
    color: '#32a896',
    label: '#LPS',
  },
  {
    id: 2,
    name: 'SPS',
    color: '#89d60e',
    label: '#SPS',
  },
  {
    id: 3,
    name: 'Austin Reefer',
    color: '#ec930e',
    label: '#Austin-Reefer',
  },
]

// NOTE - Mock data ends

type Inputs = {
  title: string
  tags: string[]
}

// interface IPost {
//   coverImage: String
//   title: String
//   hashTags: TTag[]
//   content: String
//   updatedAt: String
// }

const NewPost = () => {
  const { register, handleSubmit, watch } = useForm<Inputs>()
  const [content, setContent] = useState<string>('')
  const [filteredTags, setFilteredTags] = useState<Get_TagsQuery['tags']>([])
  const [selectedTags, setSelectedTags] = useState<Get_TagsQuery['tags']>([])

  const [createPost] = useCreate_PostMutation()
  const [isOpen, setIsOpen] = useState<boolean>(true)
  const { data, loading } = useGet_TagsQuery()

  if (loading) <div>loading...</div>

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
    console.log('🚀 ~ file: new-post.tsx ~ line 75 ~ NewPost ~ data', newPost)

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

  const handleDelete = (tagId: number) => {
    setFilteredTags(filteredTags?.filter(tag => tag.id !== tagId))
  }

  const handleTagAdd = (ev: React.ChangeEvent<HTMLInputElement>) => {
    let targetValue = ev.target.value.toLowerCase()
    let _filteredTags = data?.tags.filter(tag => {
      return tag.name.toLowerCase().indexOf(targetValue) !== -1
    })
    setFilteredTags(_filteredTags || [])
  }

  const handleAddTags = (id: number) => {
    const selectedTag = data?.tags.find(tag => tag.id === id)
    if (!selectedTag) return
    // Add tag if it's not already in the list
    if (selectedTags.indexOf(selectedTag) === -1) {
      setSelectedTags(prevState => [...prevState, selectedTag])
    }
  }

  console.log(
    '🚀 ~ file: new-post.tsx ~ line 71 ~ NewPost ~ selectedTags',
    selectedTags,
  )

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
                  className="block w-full text-4xl font-bold text-gray-700 border-0 bg-gray-50 focus:outline-none"
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
                  {...register('tags', { required: false })}
                  onChange={handleTagAdd}
                />
                <Dropdown
                  isOpen={isOpen}
                  items={filteredTags}
                  handleClick={handleAddTags}
                />
                <div className="flex space-x-2">
                  {filteredTags?.map(tag => (
                    <Tag tag={tag} key={tag.id} onDelete={handleDelete} />
                  ))}
                </div>
              </div>
              <div className="max-w-full px-10 py-2 mb-5 text-gray-500 bg-gray-100">
                <Button buttonType={'plain'} size="medium" type="button">
                  <BsImage />
                  <span>Upload image</span>
                </Button>
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

export default withAuth(NewPost)
