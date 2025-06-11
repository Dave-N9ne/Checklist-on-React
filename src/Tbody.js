import styles from './Tbody.module.css';

function Tbody({
    styleNumber, 
    list, 
    editInputs,
    clickHandler,
    checkHandler,
    regexp
}) {
    return <tbody className={styles.tbody}>
    {
      list
      .map((row, index) => {
        const number = index + 1;
        const id = row.id;
        const isChecked = row.isChecked;
        const isEdit = row.isEdit;
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
            .map(([key, value], index) => {
              if (
                typeof value !== 'boolean' 
                && 
                key !== 'id'
              )
              return <td key={index}>
                {
                  isEdit
                  ?
                  <input
                   className={styles.input}
                   type="text"
                   value={value}
                   onChange={(event) =>
                     editInputs(id, key, event)}
                  />
                  :
                  value
                }  
              </td>})
          }
          <button
            type='button'
            className={styles.row__button}
            onClick={() =>
              clickHandler(id)}
          >
            {isEdit ? 'Confirm' : 'Edit'}
          </button>
        </tr>})
    }
  </tbody>;
}

export default Tbody;