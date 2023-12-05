import { Search } from "../shared/search/search"
import { Table } from "../shared/table/table"
import { HeadItemsHome, mockHome } from "./mock"
import './home.css'


export const Home = () => {
    return (
        
        <div className="home-container">
            <Search/>
            <Table tableHead={HeadItemsHome} tableData={mockHome} />
        </div>
    )
}