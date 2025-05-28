import styles from './Control.module.css';

function Control({value, controlKeys, addRow, changeHandler}) {
    return <div className={styles.control}>
        <ul className={styles.control__list}>
          {value.map((element, index) => <li className={styles.control__item}>
          <label>
            {controlKeys[index]}:
          </label>
          <input
            className={styles.control__input}
            type="text"
            value={element}
            onChange={(event) => 
              changeHandler(index, event)}
          />
        </li>)}
        </ul>
        <button
          className={styles.control__button}
          onClick={addRow}
        >
            Add new row
        </button>
    </div>
}

export default Control;