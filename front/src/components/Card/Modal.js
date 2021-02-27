import React, { useState } from 'react';
import { useHistory  } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"

function Modal(props) {
  const history = useHistory();
const user = useSelector(state => state.user)
const dispatch = useDispatch()
  const Answerreq = value => {
    console.log(user,'user');
    console.log(value, '=========')
    

    if (props.props[0].answer == value) {
      user.counts+=props.props[0].cost
      user.trueanswer+=1
      console.log(user, 'right');
       dispatch({ type: 'ANSWER_RIGHT', payload: user })
       props.onModalClose()

    }
    else{
      user.counts-=props.props[0].cost
      user.falseanswer+=1
      console.log(user, 'error');
      dispatch({ type: 'ANSWER_RIGHT', payload: user })
      props.onModalClose()
    }
  }

  const [input, setInput] = useState({
    answer: '',
  })
  const { answer } = input

  function answerChange({ target: { name, value } }) {
    setInput({
      ...input,
      [name]: value,

    })
  }
  // console.log(props, 'props');
  console.log(props.props[0]);
  return (
    <div className={`modal_wrapper ${props.isOpened ? 'open' : 'closed'}`} style={{ ...props.style }}>
      <div className="modal_body">
        <div className="modal_close" onClick={props.onModalClose}>X</div>
        <h2>{props.props[0].question}</h2>
        <hr />
        {props.children}
        <form onSubmit={(e) => { e.preventDefault(); Answerreq(answer) }}>
          <input name="answer" placeholder="answer" onChange={answerChange} value={answer} ></input>
          <button>Ответить</button>
        </form>
      </div>
    </div>
  );
}

export default Modal;
