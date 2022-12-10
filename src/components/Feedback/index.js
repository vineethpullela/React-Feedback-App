import './index.css'
import {Component} from 'react'
import Emoji from '../emoji'

class Feedback extends Component {
  state = {isClicked: false}

  onClickChangeCard = () => {
    this.setState({isClicked: true})
  }

  render() {
    const {isClicked} = this.state
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources
    return (
      <div className="app-container">
        {isClicked && (
          <div className="thank-you-container">
            <img src={loveEmojiUrl} className="love-img" alt="love emoji" />
            <h1>Thank You!</h1>
            <p>
              We will use your feedback to improve our customer support
              performance
            </p>
          </div>
        )}
        {!isClicked && (
          <div className="emoji-card-container">
            <h1 className="emoji-heading">
              How satisfied are you with our customer support performance?
            </h1>
            <ul className="emojis-container">
              {emojis.map(each => (
                <Emoji
                  key={each.id}
                  emojiDetails={each}
                  onClick={this.onClickChangeCard}
                />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}
export default Feedback
