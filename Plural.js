import React from 'react'

const Plural = (props) => {
    return(
        <div className = "synonym__info">
            
            {
                props.plural && <p className = "synonym__key" >
                    <span className = "synonym__value"> {props.plural}</span>
                </p>
            }
        </div>
    )
}

export default Plural;