import { marked } from 'marked'

const Preview = ({ markdown }) => {
  return (
    <section
      className="border-2 border-sky-800 rounded bg-white p-4 overflow-y-auto h-full prose"
      id="preview"
      dangerouslySetInnerHTML={{ __html: marked.parse(markdown) }}
    />
  )
}

export default Preview
