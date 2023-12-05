export const RowHead = ({items}) => {
    return (
        <>
            {
                items.map((item) => {
                    return (
                        <tr>
                            <th className='table-head-item'>{item}</th>
                        </tr>
                    )
                })
            }
        </>


    )
}