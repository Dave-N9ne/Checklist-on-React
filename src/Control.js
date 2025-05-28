import styles from './Control.module.css';

function Control() {
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
    return newRow;
}

export default Control;