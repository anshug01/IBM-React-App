import React from 'react'

const Synonym = (props) => {
    return(
        <div className = "synonym__info">
            
            {
                props.synonym && <p className = "synonym__key" >
                    <span className = "synonym__value"> {props.synonym}</span>
                </p>
            }
        </div>
    )
}

export default Synonym;