import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { useHistory } from 'react-router-dom'
import Modal from "./Modal"


function Cards(props) {
  const history = useHistory();
  let [modalclick, setModalclick] = useState(false)
  let [modalprops, setModalprops] = useState()
  const dispatch = useDispatch()
  // получаем значения из store (аналогия getState())
  // const cards = useSelector(store => store.cards)

  useEffect(() => {
    fetch('http://localhost:4000/card')
      .then(res => res.json())
      // вариант 1
      .then(data => dispatch({ type: 'LOAD_QUESTION', payload: data }))

    // варинат 2
    // .then(data => dispatch(loadPeopleAC(data)))
  }, [])

  const question = useSelector(state => state.question)
  const user = useSelector(state => state.user)

  console.log(question);

  console.log(user);

  let Handleclicker = id => {
    setModalclick(modalclick = true)

    if (question.game.filter(el => el._id == id).length) { setModalprops((modalprops) => modalprops = question.game.filter(el => el._id == id)) }
    else setModalprops(modalprops = question.rule.filter(el => el._id == id))

    console.log('cllick', id);
  }


  function IWantToKnowHowMuchIStupid(e) {
    e.preventDefault();
    console.log('IWantToKnowHowMuchIStupid');

    fetch('http://localhost:4000/gameover', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      // вариант 1
      .then(data => console.log(data))

    return history.push('/stat')

    // варинат 2
    // .then(data => dispatch(loadPeopleAC(data)))

  }


  return (
    <>
      {user && <div><div>Игрок: {user.name}</div>
        <div>Очки: {user.counts}</div></div>
      }


      {user && question.game.map(el =>
        <div key={el._id} onClick={() => Handleclicker(el._id)}>
          <div>Game</div>
          <div>{el.cost}</div>
        </div>
      )}

      {user && question.rule.map(el =>
        <div key={el._id} onClick={() => Handleclicker(el._id)}>
          <div>Rule</div>
          <div>{el.cost}</div>
        </div>
      )}


      { modalclick && <Modal props={modalprops} isOpened={true}
        onModalClose={() => setModalclick(modalclick = false)}

      />}

      {user && <form onSubmit={IWantToKnowHowMuchIStupid}>
        <button >Завершить игру</button>
      </form>
      }
    </>
  )

}

export default Cards;
