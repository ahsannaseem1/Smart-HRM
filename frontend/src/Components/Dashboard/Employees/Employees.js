import Sidebar from "../Sidebar";
import { useTable } from 'react-table';
import { useSelector } from "react-redux";
import { useEffect, useMemo } from "react";

function Employees() {
    const data = useSelector((state) => state.EmployeeData);

    const columns = useMemo(
        () => [
            { Header: 'Name', accessor: 'name' },
            { Header: 'Email', accessor: 'email' },
            { Header: 'Salary', accessor: 'salary' },
            { Header: 'Leaves', accessor: 'leaves' },
            { Header: 'Department', accessor: 'department' },
            // Add more columns as needed based on your data structure
        ],
        []
    );

    const tableData = useMemo(() => data.employeeData, [data.employeeData]);

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({ columns, data: tableData });

    useEffect(() => {
        console.log("employees");
        console.log(data.employeeData);
    }, [data.employeeData]);

    return (
        <div className="flex justify-between">
            <Sidebar></Sidebar>

            <div className="self-center items-center p-10 w-full rounded-lg">
            <table {...getTableProps()} className="table-auto w-full border-2 border-blue-900 rounded-xl">
                <thead>
                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                <th {...column.getHeaderProps()} className="p-2 bg-blue-600 text-white border-b text-left text-sm">{column.render('Header')}</th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map(row => {
                        prepareRow(row);
                        return (
                            <tr {...row.getRowProps()} className="border-b">
                                {row.cells.map(cell => (
                                    <td {...cell.getCellProps()} className="p-2 text-left text-sm">{cell.render('Cell')}</td>
                                ))}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            </div>
        </div>
    );
}

export default Employees;
