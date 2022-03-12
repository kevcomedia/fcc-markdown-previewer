import { marked } from 'marked'

marked.setOptions({
  gfm: true,
  breaks: true,
})

const markdownService = {
  parse: marked.parse,
}

export default markdownService
