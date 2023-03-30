import {FC} from "react";
import {CommonUiComponentProps} from "@/ui/common";
import {Column, useTable} from 'react-table';
import clsx from "clsx";

export type TableProps = {
    data: Array<any>;
    columns: Array<Column>;
    wrapperClassName?: string;
    bodyClassName?: string;
} & CommonUiComponentProps;

export const Table: FC<TableProps> = (props) => {
    const {
        data,
        columns,
        className,
        wrapperClassName,
        bodyClassName,
    } = props;
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({
        data,
        columns
    });

    const cls = clsx(
        'border-separate border-spacing-y-3 w-full',
        className
    );

    const bodyCls = clsx(
        'overflow-y-auto block',
        bodyClassName
    );

    return (
        <div className={wrapperClassName}>
            <table {...getTableProps()} className={cls}>
                <thead>
                {headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()} className='text-left flex'>
                        {headerGroup.headers.map(column => {
                            const {
                                width,
                                maxWidth
                            } = column;
                            return (
                                <th {...column.getHeaderProps()} align={column.id === 'actions' ? 'center' : 'left'} style={{width, maxWidth}}>{column.render('Header')}</th>
                            )
                        })}
                    </tr>
                ))}
                </thead>
                <tbody {...getTableBodyProps()} className={bodyCls}>
                {rows.map((row, i) => {
                    prepareRow(row);
                    return (
                        <tr {...row.getRowProps()}>
                            {row.cells.map(cell => {
                                const {
                                    width,
                                    maxWidth
                                } = cell.column;
                                return <td {...cell.getCellProps()} align={cell.column.id === 'actions' ? 'center' : 'left'} style={{width, maxWidth}}>{cell.render('Cell')}</td>
                            })}
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </div>
    )
}