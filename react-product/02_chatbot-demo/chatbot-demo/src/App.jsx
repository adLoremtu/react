import React from 'react';
import './assets/styles/style.css';
import { AnswersList, Chats, FormDialog } from './components';
import { db } from './firebase';
import { collection, getDocs } from "firebase/firestore";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answers: [],
      chats: [],
      currentId: "init",
      dataset: {},
      open: false
    }
    this.selectAnswer = this.selectAnswer.bind(this)
    this.handleClickOpen = this.handleClickOpen.bind(this)
    this.handleClose = this.handleClose.bind(this)
  }
  
  // 質問
  displayNextQuestion = (nextQuestionId) => {
    const chats = this.state.chats;
    chats.push({
      text: this.state.dataset[nextQuestionId].question,
      type: 'question'
    })
    
    this.setState({
      // chats
      chats: chats,
      currentId: nextQuestionId,
      answers: this.state.dataset[nextQuestionId].answers
    })
  }
  
  // 回答した場合
  selectAnswer = (selectedAnswer, nextQuestionId) => {
    switch(true) {
      case (nextQuestionId === 'init'):
        this.displayNextQuestion(nextQuestionId);
        break;
      
      case (/^https:*/.test(nextQuestionId)):
        const link = document.createElement('a');
        link.href = nextQuestionId;
        link.target = '_blank';
        link.click();
        break;
        
      case (nextQuestionId === 'contact'):
        this.handleClickOpen()
        break;
        
      default:
        const chats = this.state.chats;
        chats.push({
          text: selectedAnswer,
          type: 'answer'
        });
        
        this.setState({
          // chats
          chats: chats
        })
        
        setTimeout(() => this.displayNextQuestion(nextQuestionId), 1000);
        break;
    }
  }
  
  initDataset = (dataset) => {
    this.setState({dataset: dataset})
  }
  
  // 画面初期描画直後に実行される
  componentDidMount() {
    (async() => {
      const dataset = this.state.dataset;
      const q = collection(db, 'questions');
      const querySnapShot = await getDocs(q);
      
      querySnapShot.forEach((doc) => {
          dataset[doc.id] = doc.data();
      })
      
      this.initDataset(dataset);
      const initAnswer = '';
      this.selectAnswer(initAnswer, this.state.currentId);
    })();

  }
  
  // 最新チャットが見えるようにスクロール位置を最下部に設定
  componentDidUpdate() {
    const scrollArea = document.getElementById('scroll-area');
    
    if(scrollArea) {
      scrollArea.scrollTo({
        top: scrollArea.scrollHeight,
        behavior: 'smooth'
      })
    }
  }
  
  // モーダルオープン
  handleClickOpen() {
    this.setState({open: true});
  };

  // モーダルクローズ
  handleClose() {
      this.setState({open: false});
  };
  
  render() {
    return (
      <section className='c-section'>
        <div className='c-box'>
          <Chats chats={this.state.chats}/>
          <AnswersList answers={this.state.answers} select={this.selectAnswer}/>
          <FormDialog open={this.state.open} handleClose={this.handleClose} />
        </div>
      </section>
    );
  }
}
