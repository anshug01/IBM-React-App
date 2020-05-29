import React, {Component} from 'react';
import './App.css';
import Titles from './Components/Title'
import Synonym from './Components/Synonym'
import Form from './Components/Form'
import FormP from './Components/FormP';
import Plural from './Components/Plural';

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
      const str = JSON.stringify(data).split('"')
      // const len = str.length - 1;
      this.setState({
        word : word,
        synonym : str.slice(1,10)
      });
      console.log(word);
      console.log(typeof data);
    }
  }
  getPlural = async(e) => {
    const word = e.target.elements.Word.value
    e.preventDefault();
    if(word){
      const api_call = await fetch(`http://localhost:8080/plural/${word}`)
      const data = await api_call.json()
      this.setState({
        word : word,
        plural : data.plural
      });
      console.log(word);
      console.log(typeof data);
    }
  }

    render(){
    return(
      <div>
        <div className = "wrapper">
          <div className = "main">
            <div className = "container">
              <div className = "row">
                <div className = "title-container">
                  <Titles />
                  <div className = "form-container">
                    <Form getSynonym = {this.getSynonym} />
                    <Synonym
                      word = {this.state.word}
                      synonym = {this.state.synonym}
                    />
                    <FormP getPlural = {this.getPlural} />
                    <Plural
                      word = {this.state.word}
                      plural = {this.state.plural}
                    />
                  </div>
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
