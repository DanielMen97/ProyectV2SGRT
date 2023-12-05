import './usuarios.css'
import { Table } from "../shared/table/table";
import { HeadItemsUsuarios, mock } from './mock';
import { Search } from '../shared/search/search';

export const Usuarios = () => {
  return (
    <div className="users-container">
      <div className="layout-container">
        <div className="head-content">
          <Search/>
        </div>
        <div className="table-content">
          
          <Table tableHead={HeadItemsUsuarios} tableData={mock} />
        </div>
      </div>
    </div>
  )
}