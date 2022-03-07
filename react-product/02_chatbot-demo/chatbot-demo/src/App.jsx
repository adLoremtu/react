import React from 'react';
import defaultDataset from './dataset';
import './assets/styles/style.css';
import { AnswersList } from './components';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answers: [],
      chats: [],
      currentId: "init",
      dataset: defaultDataset,
      open: false
    }
  }
  
  initAnswer = () => {
    const initDataset = this.state.dataset[this.state.currentId];
    const initAnswers = initDataset.answers;
    console.log("initDataSet", this.initDataset);
    console.log("initAnswers", this.initAnswers);
    
    this.setState({
      answers: initAnswers
    })
  }
  
  // 画面初期描画直後に実行される
  componentDidMount() {
    this.initAnswer();
  }
  
  render() {
    return (
      <section className='c-section'>
        <div className='c-box'>
          <AnswersList answers={this.state.answers}/>
        </div>
      </section>
    );
  }
}
