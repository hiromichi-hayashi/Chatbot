import React, { useState, useEffect } from 'react';
import { AnswersList, Chats } from "./conponents/index";
import { db } from "./firebase/index";
import { makeStyles } from '@material-ui/core/styles';
import bgimg from './assets/img/S__44826627.jpg';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import HideAppBar from './conponents/header/header';


const useStyles = makeStyles({
  chats: {
    backgroundImage: `url(${bgimg})`,
    backgroundPosition: 'center',
    height: '100vh',
    overflow: 'auto',
    padding: 0,
  },
});


const App = () => {

  const classes = useStyles();

  //stateの設定
  const [answers, setAnswers] = useState([]);//解答内容
  const [chats, setChats] = useState([]);//chatの表示内容
  const [currentId, setCurrentId] = useState("question_1");//質問番号の初期値
  const [dataset, setDataset] = useState({});//jsonデータ内容
  const [location, setLocation] = useState([]);//google map表示時の緯度経度内容
  const [nature, setNature] = useState(0);//カテゴリのカウント
  const [amusement, setAmusement] = useState(0);//カテゴリのカウント
  const [meal, setMeal] = useState(0);//カテゴリのカウント
  const [art, setArt] = useState(0);//カテゴリのカウント

  //カテゴリ別カウント関数
  const count = (questionCategory) => {
    if (questionCategory === 'Nature') {
      setNature(nature + 1);
    } else if (questionCategory === 'Amusement') {
      setAmusement(amusement + 1);
    } else if (questionCategory === 'Meal') {
      setMeal(meal + 1);
    } else if (questionCategory === 'Art') {
      setArt(art + 1);
    }
  };

  //カウント数の初期化
  const countReset = () => {
    setNature(0);
    setMeal(0);
    setAmusement(0);
    setArt(0);
  }


  const displayNextQuestion = (nextQuestionId, nextDataset) => {

    //選択された質問のIDをdatasetから取得
    addChats({
      text: nextDataset.question,
      type: 'question'
    })
    //所得したIDをstateに書き換える
    setAnswers(nextDataset.answers)
    setCurrentId(nextQuestionId)
    setLocation(nextDataset.location)
  }

  const selectAnswer = (selectedAnswer, nextQuestionId, questionCategory) => {
    count(questionCategory)
    if (nature === 2) {
      setAnswers(dataset.Nature.answers)

      addChats({
        text: selectedAnswer,
        type: 'answer'
      })

      setTimeout(() => displayNextQuestion('Nature', dataset['Nature']), 1000);
      countReset()

    } else if (amusement === 2) {
      setAnswers(dataset.Amusement.answers)

      addChats({
        text: selectedAnswer,
        type: 'answer'
      })

      setTimeout(() => displayNextQuestion('Amusement', dataset['Amusement']), 1000);
      countReset()

    } else if (meal === 2) {
      setAnswers(dataset.Meal.answers)

      addChats({
        text: selectedAnswer,
        type: 'answer'
      })

      setTimeout(() => displayNextQuestion('Meal', dataset['Meal']), 1000);
      countReset()

    } else if (art === 2) {
      setAnswers(dataset.Art.answers)

      addChats({
        text: selectedAnswer,
        type: 'answer'
      })

      setTimeout(() => displayNextQuestion('Art', dataset['Art']), 1000);
      countReset()

    } else {

      switch (true) {
        //nextQuestionIdの引数がhttpsから始まる要素か判断する
        case (/^https:*/.test(nextQuestionId)):
          const a = document.createElement('a');
          a.href = nextQuestionId;
          //.target = '_blank'は別タブでリンク先を開くことができる
          a.target = '_blank';
          //実際にリンクをクリックする操作を実装
          a.click();
          break;

        //Cahtsの答えに対してメッセージを呼び出す
        default:
          addChats({
            text: selectedAnswer,
            type: 'answer'
          })

          setTimeout(() => displayNextQuestion(nextQuestionId, dataset[nextQuestionId]), 1000);
          break;
      }
    }
  }
  //前回のchatの中身を受け取る
  const addChats = (chat) => {
    setChats(prevChats => {
      //前回のchatの中身に現在のchatの中身を入れる
      return [...prevChats, chat]
    })
  }

  //質問欄
  useEffect(() => {
    //非同期処理　async付きの即時関数
    (async () => {
      const dbRef = db.collection('questions');
      const nomalDataset = {};

      await dbRef.get()
        .then(snapshots => {
          snapshots.forEach(doc => {
            const id = doc.id
            const data = doc.data()
            nomalDataset[id] = data
          })
        })
      setDataset(nomalDataset);
      displayNextQuestion(currentId, nomalDataset[currentId])
    })()
  }, [])

  useEffect(() => {
    const scrollArea = document.getElementById('scroll-area');
    if (scrollArea) {
      //scorll-areaのIDを取得したら
      scrollArea.scrollTop = scrollArea.scrollHeight;
      //scrollAreaの頂点をscrollHeightに合わせる
    }
  })


  return (
    <Container className={classes.chats}>
      <CssBaseline />
      <HideAppBar />
      <Chats chats={chats} location={location} />
      <AnswersList answers={answers} select={selectAnswer} />
    </Container>
  );
}


export default App;
