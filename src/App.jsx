import { useState } from 'react'
import Editor from './components/Editor'
import Preview from './components/Preview'
import initialMarkdown from './initialMarkdown'

const App = () => {
  const [rawMarkdown, setRawMarkdown] = useState(initialMarkdown)

  return (
    <section className="p-8 bg-sky-200 h-full">
      <div className="container mx-auto h-full flex flex-col">
        <h1 className="mb-4 text-lg text-center font-semibold text-sky-900">
          Markdown Previewer
        </h1>

        <div className="grow grid grid-cols-2 gap-x-4">
          <div>
            <Editor value={rawMarkdown} onChange={setRawMarkdown} />
          </div>

          <div>
            <Preview markdown={rawMarkdown} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default App
