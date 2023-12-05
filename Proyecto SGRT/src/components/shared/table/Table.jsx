import { Row } from '../row/row'
import { RowHead } from '../rowHead/rowHead'
import './table.css'

export const Table = ({tableHead, tableData}) => {
    return (
        <table className="table-container">
            <thead className='table-head'>
                <RowHead items={tableHead}/>
            </thead>
            <Row elements={tableData} />
        </table>
    )
}