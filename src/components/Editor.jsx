const Editor = ({ value, onChange }) => {
  const handleChange = (event) => {
    onChange(event.target.value)
  }

  return (
    <textarea
      className="border-2 border-sky-800 rounded font-mono text-sm p-4 w-full"
      id="editor"
      cols={10}
      value={value}
      autoFocus={true}
      onChange={handleChange}
    />
  )
}

export default Editor
