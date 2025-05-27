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

  const [value2, setValue2] = useState(['', '']);
  const newRow = <div className={styles.adding}>
    <ul className={styles.adding__list}>
      {value2.map((element, index) => <li className={styles.adding__item}>
      <input
        className={styles.adding__input}
        type="text"
        value={element}
        onChange={(event) => 
          changeHandler2(index, event)}
      />
    </li>)}
    </ul>
    <button
      className={styles.adding__button}
      onClick={() => 
        addRow(value2[0], value2[1])}
    >
        Add New Row
    </button>
  </div>

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

  function addRow(value1, value2) {
    const copy = [...value];
    copy.push({
      id: nanoid(),
      isEdit: false,
      isChecked: false,
      time: value1,
      aim: value2,
    })
    copy.sort(compareFn);
    setValue(copy);
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
    {newRow}
  </> // добавить инпут и кнопку для добавления элемента в таблицу и расположить в порядке возрастания по времени 
}

export default Checklist;
