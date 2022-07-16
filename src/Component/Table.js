import React from 'react';

function Table({headCell, data}) {
    return <table className="table">
        <thead>
            <tr>
                {
                    headCell.map(
                        item => {
                            return (
                            
                                <th>{ item }</th>
                                
                            )
                        }
                    )
                }
            </tr>
        </thead>
        <tbody>
        {
            data.map(
                item => {
                    return (
                        <tr>
                            <td>{ item.date }</td>
                            <td>{ item.status }</td>
                        </tr>
                    )
                }
            )
        }
        </tbody>
    </table>
}


export default Table;
