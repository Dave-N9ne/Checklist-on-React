import styles from './Checklist.module.css';
import {useState} from 'react';
import Thead from './Thead';
import Tbody from './Tbody';

const todoList = [
  {time: '06:30 am', aim: 'Get up'},
  {time: '06:40 am', aim: 'Have a breakfast'},
  {time: '07:45 am', aim: 'Go at work'},
  {time: '01:00 pm', aim: 'Have a lunch'},
  {time: '02:00 pm', aim: 'Work again'},
  {time: '06:00 pm', aim: 'Go home'},
  {time: '07:00 pm', aim: 'Have a dinner'},
  {time: '08:00 pm', aim: 'Wash'},
  {time: '10:00 pm', aim: 'Sleep'},
]

function Checklist() {
  const [value, setValue] = useState(todoList);
  const [checked, setChecked] = useState(false);

  function changeHandler(index, event) {
    setValue([
      ...value.slice(0, index),
      event.target.value,
      ...value.slice(index + 1)
    ]);
  }

  function checkHandler(event) {
    setChecked(!checked);
  }

  return <table className={styles.table}>
    <Thead
      styleNumber={styles.number}
      row={todoList[0]}
    />
    <Tbody
      styleNumber={styles.number} 
      todoList={todoList}
      checked={checked}
      checkHandler={checkHandler}
    />
  </table>
}

export default Checklist;
