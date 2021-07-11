import dynamic from 'next/dynamic'
import ReactMarkdown from 'react-markdown'
import 'react-markdown-editor-lite/lib/index.css'

const MdEditor = dynamic(() => import('react-markdown-editor-lite'), {
  ssr: false,
})

interface IEditor {
  setContent: React.Dispatch<React.SetStateAction<string>>
  content: string
}
export default function Editor({ setContent }: IEditor) {
  const handleEditorChange = ({ text = '' }) => {
    setContent(text)
  }
  return (
    <MdEditor
      style={{ height: '600px' }}
      renderHTML={text => <ReactMarkdown children={text} />}
      onChange={handleEditorChange}
    />
  )
}
