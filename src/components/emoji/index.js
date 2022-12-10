import './index.css'

const Emoji = props => {
  const {emojiDetails, onClick} = props
  const {name, imageUrl} = emojiDetails

  return (
    <li className="emoji-container">
      <img src={imageUrl} alt={name} className="emoji-img" onClick={onClick} />
      <p className="emoji-name">{name}</p>
    </li>
  )
}

export default Emoji
