// Write your React code here.
import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {
    isFeedbackGiven: false,
  }

  onclickEmoji = () => {
    this.setState({isFeedbackGiven: true})
  }

  renderFeedbackQuestion = () => {
    const {resources} = this.props
    const {emojis} = resources
    return (
      <div>
        <h1>How satisfied are you with our customer support performance?</h1>
        <ul>
          {emojis.map(emoji => (
            <li key={emoji.id}>
              <button onClick={this.onclickEmoji}>
                <img src={emoji.imageUrl} alt={emoji.name} />
                <br />
                <span>{emoji.name}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  renderThankYouScreen = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources
    return (
      <div>
        <img src={loveEmojiUrl} alt="love emoji" />
        <h1>Thank You!</h1>
        <p>
          We will use your feedback to improve our customer support performance.
        </p>
      </div>
    )
  }

  render() {
    const {isFeedbackGiven} = this.state
    return (
      <div>
        {isFeedbackGiven
          ? this.renderThankYouScreen()
          : this.renderFeedbackQuestion()}
      </div>
    )
  }
}

export default Feedback
