import styles from './EasyTable.module.scss';
import TableRows from './TableRows/TableRows';
import PropTypes from 'prop-types';
import {useState} from 'react'

export default function Table({arialabel,className,caption,data}) {
  const [tableView,toggleView] = useState(true);

  const view = tableView ? (<table className={`${styles.table}`}>
  <caption>{caption}</caption>
  {data && data.length > 0 && <TableRows type="Header" data={data}/>}
  {data && data.length > 0 && <TableRows data={data} />}
</table>) :""
  return (
    <div role="region" aria-labelledby={arialabel} tabIndex="0" className={`${styles.TableContainer} ${className}`}>
      <button onClick={()=>{toggleView(!tableView)}}>{tableView ? "Hide": "Show"} {arialabel}</button>
      {view}
    </div>
  )
}


Table.propTypes = {
  arialabel: PropTypes.string,
  className: PropTypes.string,
  caption: PropTypes.string,
  headers: PropTypes.any,
  data: PropTypes.any
}