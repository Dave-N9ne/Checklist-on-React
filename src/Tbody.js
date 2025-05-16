import styles from './Tbody.module.css';

function Tbody({
    styleNumber, 
    todoList, 
    value, 
    changeHandler,
    clickHandler,
    checkHandler
}) {
    return <tbody className={styles.tbody}>
    {
      todoList
      .map((row, index) => {
        const number = index + 1;
        const id = row.id;
        const isChecked = row.isChecked;
        const idEdit = row.isEdit;
        return <tr
                 key={number}
                 className={
                  isChecked ? 
                  `${styles.row} ${styles.striped}` : 
                  `${styles.row}`
          }>
          <td className={styleNumber}>
            <button
              className={
                isChecked ? 
                `${styles.row} ${styles.striped}` : 
                `${styles.row}`
              }
              type='button'
              onClick={() => checkHandler(id)}
            >
              {number}
            </button>
          </td>
          {
            Object
            .entries(row)
            .map(([key, value], index) => 
            typeof value !== 'boolean' 
            &&
            key !== 'id'
            ?
            <td key={index}>
              {value}  
            </td>
            :
            null) 
          }
          <button
            type='button'
            className={styles.row__button}
            onClick={() =>
              clickHandler(id)}
          >
            {idEdit ? 'Confirm' : 'Edit'}
          </button>
        </tr>})
    }
  </tbody>;
}

export default Tbody;