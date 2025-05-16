import styles from './Checklist.module.css';
import {useState} from 'react';
import {customAlphabet} from 'nanoid';
import Thead from './Thead';
import Tbody from './Tbody';

const nanoid = customAlphabet('1234567890abcdef', 10);

const compareFn = (previous, next) => 
  previous.time.localeCompare(next.time);

const todoList = [
  {id: nanoid(), isEdit: false, isChecked: false, time: '06:30', aim: 'Get up'},
  {id: nanoid(), isEdit: false, isChecked: false, time: '06:40', aim: 'Have a breakfast'},
  {id: nanoid(), isEdit: false, isChecked: false, time: '07:45', aim: 'Go at work'},
  {id: nanoid(), isEdit: false, isChecked: false, time: '13:00', aim: 'Have a lunch'},
  {id: nanoid(), isEdit: false, isChecked: false, time: '14:00', aim: 'Work again'},
  {id: nanoid(), isEdit: false, isChecked: false, time: '18:00', aim: 'Go home'},
  {id: nanoid(), isEdit: false, isChecked: false, time: '19:00', aim: 'Have a dinner'},
  {id: nanoid(), isEdit: false, isChecked: false, time: '20:00', aim: 'Wash'},
  {id: nanoid(), isEdit: false, isChecked: false, time: '22:00', aim: 'Sleep'},
];

function Checklist() {
  const [value, setValue] = useState(todoList);

  function editInputs(id, field, event) {
    setValue(value.map((element) => {
      if (element.id === id) {
        element[field] = event.target.value;
      }
      /* if (!element[field].includes(':')) {
        element[field] = null;
      } */
      return element;
    }));
  }

  function clickHandler(id) {
    setValue(value.map((previous) => {
      if (previous.id === id) {
        previous.isEdit = !previous.isEdit;
      }
      return previous;
    }))
    const copy = value.slice();
    copy.sort(compareFn);
    setValue(copy);
  }

  function checkHandler(id) {
    setValue(value.map((previous) => {
      if (previous.id === id) {
        previous.isChecked = !previous.isChecked;
      }
      return previous;
    }))
  }

  return <table className={styles.table}>
    <Thead
      styleNumber={styles.number}
      row={todoList[0]}
    />
    <Tbody
      styleNumber={styles.number} 
      list={value}
      value={value}
      editInputs={editInputs}
      clickHandler={clickHandler}
      checkHandler={checkHandler}
    />
  </table> // добавить инпут и кнопку для добавления элемента в таблицу и расположить в порядке возрастания по времени 
}

export default Checklist;
