const TextHTML = ({ text }) => {
  return (
    <div
      className='fade-in'
      dangerouslySetInnerHTML={{ __html: text }}
    />
  )
}

export default TextHTML
