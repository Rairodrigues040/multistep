// Importando ícones de emojis Rect
import {
    BsfillEmojiHearEyesFill,
    BsFillEmojiSmileFill,
    BsFillEmojiNeutralFill,
    BsFillEmojiFrownFill
} from 'react-icons/bs'

const ReviewForm = () => {
    return (
        <div className="review-form">
            <div className="form-control">
                <div className="form-control score-container">
                    <label className="radio-container">
                        {/* rever o que é esse unsatisfied */}
                        <input
                            type="radio"
                            value="unsatisfied"
                            name="review"
                            required
                        />
                        <p>Insatisfeito</p>
                    </label>
                </div>
            </div>
        </div>
    )
}

export default ReviewForm
