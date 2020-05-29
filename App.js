import React, {Component} from 'react';
import './App.css';
import Titles from './Components/Title'
import Synonym from './Components/Synonym'
import Form from './Components/Form'

class App extends Component{
  state = {
    word : undefined,
    synonym : undefined,
  }

  getSynonym = async(e) => {
    const word = e.target.elements.Word.value
    e.preventDefault();
    if(word){
      const api_call = await fetch(`http://localhost:8080/synonym/${word}`)
      const data = await api_call.json()
      console.log(word);
      if((data.cod = "404")){
        this.state({
          word : undefined,
          synonym : undefined
        })
      }
      else{
        console.log(word);
        this.state({
          word : word,
          synonym : data.array,
        })
      }
    }
  }

  render(){
    return(
      <div>
        <div className = "wrapper">
          <div className = "main">
            <div className = "container">
              <div className = "row">
                <div className = "col-xs-5 title-container">
                  <Titles />
                </div>
                <div className = "col-xs-7 form-container">
                  <Form getSynonym = {this.getSynonym} />
                  <Synonym
                    word = {this.state.word}
                    synonym = {this.state.synonym}
                  /> 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
