import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"



function Cards(props) {

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

  let handleclicker = id =>{
   
console.log('cllick',id);
  }

  return (
    <>
      {user &&question.game.map(el =>
        <div key={el._id} onClick={handleclicker(el._id)}>
          <div>Game</div>
          <div>{el.cost}</div>
          
        </div>
      )}
    </>
  )

}

export default Cards;
