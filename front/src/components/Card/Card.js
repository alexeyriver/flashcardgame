import { useDispatch, useSelector } from "react-redux"
import { useEffect ,useState} from "react"



function Cards(props) {

  const dispatch = useDispatch()
// получаем значения из store (аналогия getState())
// const cards = useSelector(store => store.cards)

useEffect(() => {
  fetch('http://localhost:4000/card')
    .then(res => res.json())
    // вариант 1
    .then(data => dispatch({type: 'LOAD_QUESTION', payload:data }))

    // варинат 2
    // .then(data => dispatch(loadPeopleAC(data)))
}, [])

const question = useSelector(state => state.question)


console.log(question);



  return (
    <div>
      <div className="game" name="game"></div>
        <div></div>
        <div></div>
        <div></div>
      <div className="rules" name="rules"></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
  );
}

export default Cards;
