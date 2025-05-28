import styles from './Checklist.module.css';
import {useState} from 'react';
import {customAlphabet} from 'nanoid';
import Thead from './Thead';
import Tbody from './Tbody';
import Control from './Control.js';

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

const controlKeys = Object
    .keys(todoList[0])
    .filter((element) =>
    element === 'time' || element === 'aim');
const controlLength = controlKeys.length;
const inputValues = [...new Array(controlLength)]
                    .map(element => '');

function Checklist() {
  const [value, setValue] = useState(todoList);
  const [value2, setValue2] = useState(inputValues);

  function editInputs(id, field, event) {
    setValue(value.map((element) => {
      if (element.id === id) {
        element[field] = event.target.value;
      }
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

    const copy = [...value];
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

  function changeHandler2(index, event) {
    setValue2([
      ...value2.slice(0, index),
      event.target.value,
      ...value2.slice(index + 1),
    ])
  }

  function addRow() {
    const copy = [...value];
    const adding = {
      id: nanoid(),
      isEdit: false,
      isChecked: false,
    };
    const sum = value2
    .reduce((
      acc, 
      elem, 
      i
    ) => {
      return {...acc, [controlKeys[i]]: elem}
    }, adding)
    copy.push(sum);
    copy.sort(compareFn);
    setValue(copy);
    setValue2(value2.fill(''));
  }

  return <>
    <table className={styles.table}>
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
    </table>
    <Control
      value={value2}
      controlKeys={controlKeys}
      addRow={addRow}
      changeHandler={changeHandler2}
    />
  </>
}

export default Checklist;
