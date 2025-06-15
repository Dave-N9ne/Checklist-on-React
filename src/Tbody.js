import styles from './Tbody.module.css';

const addAdditionalStyle = (
  condition, 
  addedStyle, 
  ...initialStyles
) => 
  `${initialStyles.map(style => `${style} `)}
   ${condition ? `${addedStyle}` : ``}`
function Tbody({
    styleNumber, 
    list, 
    editInputs,
    clickHandler,
    deleteRow,
    checkHandler,
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
                  addAdditionalStyle(
                   isChecked,
                   styles.striped,
                   styles.row
                  )
                 }
                >
          <td className={styleNumber}>
            <button
              className={
                addAdditionalStyle(
                 isChecked,
                 styles.striped,
                 styles.row
                )
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
          <ul className={styles.row__list}>
            <li className={styles.row__item}>
              <button
                type='button'
                className={styles.row__button}
                onClick={() =>
                  clickHandler(id)}
              >
                {isEdit ? 'Confirm' : 'Edit'}
              </button> 
            </li>
            <li className={styles.row__item}>
              <button
                type='button'
                className={styles.row__button}
                onClick={() => deleteRow(id)}
              >
                Delete
              </button>
            </li>
          </ul>
        </tr>}) // ! Сделать кнопку для удаления строки
    }
  </tbody>;
}

export default Tbody;