import styles from './Thead.module.css';

function Thead({styleNumber, row}) {
    return <thead className={styles.thead}>
        <tr key="0">
          <td class={styleNumber}>#</td>
          {     
            Object
            .keys(row)
            .map((key, index) =>
            <td key={index}>
              {key}
            </td>)
          }
        </tr>
    </thead>
}

export default Thead;