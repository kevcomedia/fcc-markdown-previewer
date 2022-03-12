const Editor = () => {
  return (
    <textarea
      className="border-2 border-sky-800 rounded font-mono text-sm p-4 w-full h-full"
      id="editor"
      cols={10}
      value="# example text"
      autoFocus={true}
    />
  )
}

export default Editor
