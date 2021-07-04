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
export default function Editor({ setContent, content }: IEditor) {
  const handleEditorChange = ({ text }) => {
    setContent(text)
  }
  return (
    <MdEditor
      style={{ height: '600px' }}
      className="rounded"
      renderHTML={text => <ReactMarkdown children={text} />}
      onChange={handleEditorChange}
    />
  )
}
