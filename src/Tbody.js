import styles from './Tbody.module.css';

function Tbody({styleNumber, todoList, checked, checkHandler}) {
    return <tbody className={styles.tbody}>
    {
      todoList
      .map((row, index) => {
        const number = index + 1;
        return <tr
                 key={number}
                 className={
                  checked ? 
                  `${styles.row} ${styles.striped}` : 
                  `${styles.row}`
                 }>
          <td className={styleNumber}>
            <button
              className={
                checked ? 
                `${styles.row} ${styles.striped}` : 
                `${styles.row}`
              }
              type='button'
              onClick={checkHandler}>
              {number}
            </button>
          </td>
          {
            Object
            .values(row)
            .map((value, index) => 
            <td>
              {value}
            </td>)}
          <button
            className={styles.row__button}>
              Edit
          </button>
        </tr>})
    }
  </tbody>;
}

export default Tbody;