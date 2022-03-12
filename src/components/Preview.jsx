import markdownService from '../services/markdownService'

const Preview = ({ markdown }) => {
  return (
    <section
      className="border-2 border-sky-800 rounded bg-white p-4 overflow-y-auto prose"
      id="preview"
      dangerouslySetInnerHTML={{ __html: markdownService.parse(markdown) }}
    />
  )
}

export default Preview
