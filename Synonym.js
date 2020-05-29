import React from 'react'

const Synonym = (props) => {
    return(
        <div className = "synonym__info">
            {
                props.word && <p className="synonym__key"> Word:
                <span className="synonym__value">{props.word}</span>
                </p>
            }
            {
                props.synonym && <p className = "synonym__key" > synonym:
                <span className = "synonym__value">{props.synonym}</span>
                </p>
            }
        </div>
    )
}

export default Synonym;