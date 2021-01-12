import React, { Fragment } from 'react'
import { Table, Button } from 'react-bootstrap';
const MyTable = ({
    columns = [],
    data = [],
    onRowClick = () => { }
}) => {
    return (
        <Table responsive hover striped>
            <thead>
                <tr>
                    {columns.map(({ title }, columnKey) => (
                        <th className="text-center" key={columnKey}>
                            <Button variant="link"> {title}  </Button>
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
            {data.map((row, rowKey) => (
                <tr key={rowKey} className="text-center" onClick={() => onRowClick(row)}>
                  {columns.map(({ dataIndex, render, collapse }, columnKey) => (
                    <Fragment key={columnKey}>
                      <td>{render ? render(row[dataIndex], row, rowKey) : row[dataIndex]}</td>
                    </Fragment>
                  ))}
                </tr>
              ))}
            </tbody>
        </Table>
    )
}
export default MyTable;
