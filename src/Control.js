import styles from './Control.module.css';

function Control({value, controlKeys, addRow, changeHandler}) {
    return <div className={styles.control}>
        <ul className={styles.control__list}>
          {value.map((element, index) => <li
                                          className={styles.control__item}
                                          key={index} 
                                         >
          <label>
            {controlKeys[index]}:
          </label>
          <input
            className={styles.control__input}
            value={element}
            type={controlKeys[index] === 'time' ? 'number' : 'text'}
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