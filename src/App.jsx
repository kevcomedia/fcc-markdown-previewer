const App = () => {
  return (
    <section className="p-8 bg-sky-200 h-full">
      <div className="container mx-auto h-full flex flex-col">
        <h1 className="mb-4 text-lg text-center font-semibold text-sky-900">
          Markdown Previewer
        </h1>

        <div className="grow grid grid-cols-2 gap-x-4">
          <div>
            <textarea
              className="border-2 border-sky-800 rounded font-mono text-sm p-4 w-full h-full"
              id="editor"
              cols={10}
              value="# example text"
              autoFocus={true}
            />
          </div>

          <section
            className="border-2 border-sky-800 rounded bg-white p-4 overflow-y-auto"
            id="preview"
          >
            <h1>example text</h1>
          </section>
        </div>
      </div>
    </section>
  )
}

export default App
