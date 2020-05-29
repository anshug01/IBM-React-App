import React from 'react'

const Title = (props) => {
    return(
        <div>
            <h1 className = 'title-container__title'>WORDS</h1>
            {/* <p className = 'title-conatiner__subtitle'>Get Synonyms for any word</p>
            <p className = 'title-conatiner__subtitle'>By Rajeev Goel</p> */}
            <footer className = "title-footer">Get Synonyms and Plural for any word</footer>
            <footer className = "title-footer">by Rajeev Goel</footer>
            
        </div>
    )
}

export default Title;