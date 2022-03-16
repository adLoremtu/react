import React, {useState, useEffect, useCallback} from 'react';
import './assets/styles/style.css';
import { AnswersList, Chats, FormDialog } from './components';
import { db } from './firebase';
import { collection, getDocs } from "firebase/firestore";

const App = () => {
  const [answers, setAnswers] = useState([]);
  const [chats, setChats] = useState([]);
  const [currentId, setCurrentId] = useState("init");
  const [dataset, setDataset] = useState({});
  const [open, setOpen] = useState(false);
  
  // 質問
  const displayNextQuestion = (nextQuestionId, nextDataSet) => {
    addChats({
      text: nextDataSet.question,
      type: 'question'
    })
    
    setAnswers(nextDataSet.answers);
    setCurrentId(nextQuestionId);
  }
  
  // 回答した場合
  const selectAnswer = (selectedAnswer, nextQuestionId) => {
    switch(true) {
      case (/^https:*/.test(nextQuestionId)):
        const link = document.createElement('a');
        link.href = nextQuestionId;
        link.target = '_blank';
        link.click();
        break;
        
      case (nextQuestionId === 'contact'):
        handleClickOpen()
        break;
        
      default:
        addChats({
          text: selectedAnswer,
          type: 'answer'
        });
        
        setTimeout(() => displayNextQuestion(nextQuestionId, dataset[nextQuestionId]), 1000);
        break;
    }
  }
  
  const addChats = (chat) => {
    setChats((prevChats) => {
      return [...prevChats, chat]
    })
  }
  
  // 画面初期描画直後に実行される
  useEffect(() => {
    (async() => {
      const initDataset = {};
      const q = collection(db, 'questions');
      const querySnapShot = await getDocs(q);
      
      querySnapShot.forEach((doc) => {
          initDataset[doc.id] = doc.data();
      })
      
      setDataset(initDataset);
      displayNextQuestion(currentId, initDataset[currentId])
    })();
  }, []);
  
  // 最新チャットが見えるようにスクロール位置を最下部に設定
  useEffect(() => {
    const scrollArea = document.getElementById('scroll-area');
    
    if(scrollArea) {
      scrollArea.scrollTo({
        top: scrollArea.scrollHeight,
        behavior: 'smooth'
      })
    }
  })
  
  // モーダルオープン
  const handleClickOpen = () => {
    setOpen(true)
  };

  // モーダルクローズ
  const handleClose = useCallback(() => {
    setOpen(false)
  }, [setOpen])
  
  return (
    <section className='c-section'>
      <div className='c-box'>
        <Chats chats={chats}/>
        <AnswersList answers={answers} select={selectAnswer}/>
        <FormDialog open={open} handleClose={handleClose} />
      </div>
    </section>
  );
}

export default App