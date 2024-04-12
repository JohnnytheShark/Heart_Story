import styles from '../EasyTable.module.scss';
import PropTypes from 'prop-types';

export default function TableRows({type,data}) {
    let headers = [];
    let body = [];
    if (type === 'Header'){
        if (data){
            headers = Object.keys(data[0]).map((element,index)=><th key={index}>{element.replace(/[_]/g, '').trim().toUpperCase()}</th>)
        }
        return (<thead>
            <tr>
            {headers}
            </tr>
        </thead>)
    }
    else{
        if (data){
            body = data.map((element,index)=><tr key={index}>{Object.entries(element).map(([key,value],index)=><td data-header={`${key.replace(/[_]/g, '').trim().toUpperCase()}`} key={index}>{value||0}</td>)}</tr>)
        }
        return (
            <tbody>
                {body}
            </tbody>
          )
    }
}

TableRows.propTypes = {
    type: PropTypes.string,
    data: PropTypes.array
}