const Preview = ({ markdown }) => {
  return (
    <section
      className="border-2 border-sky-800 rounded bg-white p-4 overflow-y-auto h-full"
      id="preview"
    >
      {markdown}
    </section>
  )
}

export default Preview
