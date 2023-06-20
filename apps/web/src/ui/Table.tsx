import { FC } from "react";
import { CommonUiComponentProps } from "@/ui/common";
import clsx from "clsx";
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  ColumnDef
} from "@tanstack/react-table";
import { Typography } from "@/ui/Typography";

export type TableProps<T extends any, V extends any> = {
  data: Array<T>;
  columns: Array<ColumnDef<T, V>>;
  wrapperClassName?: string;
  bodyClassName?: string;
} & CommonUiComponentProps;

export const Table: FC<TableProps<any, any>> = <T extends any, V extends any>(props: TableProps<T, V>) => {
  const { data, columns, className, wrapperClassName, bodyClassName } = props;
  const { getHeaderGroups, getRowModel } = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    enableColumnResizing: true,
    columnResizeMode: 'onChange',
    debugTable: true
  });

  const cls = clsx("border-separate border-spacing-y-3 block", className);

  const bodyCls = clsx("overflow-y-auto block", bodyClassName);

  return (
    <div className='p-2 block max-w-full overflow-x-auto'>
      <table className={cls}>
        <thead>
        {getHeaderGroups().map((headerGroup) => <tr key={headerGroup.id} className="text-left flex">
          {headerGroup.headers.map((header) => {
            return (
                <th
                    key={header.id}
                    className='py-4 px-6'
                    colSpan={header.colSpan}
                    style={{ position: 'relative', width: header.getSize() }}
                >
                  {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                      )}
                  {header.column.getCanResize() && (
                      <div
                          onMouseDown={header.getResizeHandler()}
                          onTouchStart={header.getResizeHandler()}
                          className={`absolute top-0 right-0 w-1 h-full select-none touch-none cursor-col-resize ${
                              header.column.getIsResizing() ? 'bg-blue' : ''
                          }`}
                      ></div>
                  )}
                </th>
            );
          })}
        </tr>)}
        </thead>
        <tbody className={bodyCls}>
        {getRowModel().rows.map((row, i) => (
            <tr key={row.id} className='flex'>
              {row.getVisibleCells().map((cell) => (
                  <td
                      key={cell.id}
                      className='py-2 px-4 flex flex-col justify-center'
                      style={{ width: cell.column.getSize() }}
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
              ))}
            </tr>
        ))}
        </tbody>
      </table>
    </div>
  );
};

type HeaderProps = {
  label?: string;
};

export const Header: FC<HeaderProps> = (props) => {
  const { label } = props;
  return (
    <Typography variant="table-head" transform="uppercase" weight="bold">
      {label}
    </Typography>
  );
};

type TdProps = {
  value?: string;
};

export const Td: FC<TdProps> = (props) => {
  const { value } = props;
  return (
      <Typography variant="table-body">
        {value}
      </Typography>
  );
};