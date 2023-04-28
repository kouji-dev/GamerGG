"use client";
import { Header, Table, Td } from "@/ui/Table";
import { useMemo, useState } from "react";
import { Avatar } from "@/ui/Avatar";
import { Button, Typography } from "@/ui";
import { Chip } from "@/ui/Chip";
import { getStatusCls } from "@/ui/utils/status";
import { Card, CardHeader } from "@/ui/Card";
import { Input } from "@/ui/Input";
import { Dropdown, DropDownItem } from "@/ui/Dropdown";
import { Popover } from "@/ui/Popover";
import Link from "next/link";
import { Menu } from "@/ui/icons/menu";
import { Search } from "@/ui/icons/search";
import { Eye } from "@/ui/icons/eye";
import { Plus } from "@/ui/icons/plus";
import { createColumnHelper } from "@tanstack/table-core";

export const Actions = ({ id }: any) => {
  const [ref, setRef] = useState<any>(null);
  return (
    <>
      <Button ref={setRef} leftIcon={<Menu className="!text-floral" />} />
      <Popover anchorEl={ref}>
        <Link
          href={`/client-area/orders/${id}`}
          className="flex items-center gap-sm"
        >
          <Eye />
          <Typography>View</Typography>
        </Link>
      </Popover>
    </>
  );
};

export type Order = {
  game: string;
  summary: string;
  id: string;
  booster: string;
  price: string;
  createdAt: string;
  status: string;
};

export const OrdersList = () => {
  const columnHelper = createColumnHelper<Order>();
  const columns = useMemo(
    () => [
      columnHelper.accessor("game", {
        cell: (cell) => (
          <Avatar label={cell.getValue()} className="bg-purple" />
        ),
        header: () => <Header label="Game" />,
      }),
      columnHelper.accessor("summary", {
        cell: (cell) => <Td value={cell.getValue()} />,
        header: () => <Header label="summary" />,
      }),
      columnHelper.accessor("id", {
        cell: (cell) => <Td value={cell.getValue()} />,
        header: () => <Header label="id" />,
      }),
      columnHelper.accessor("booster", {
        cell: (cell) => (
          <Avatar label={cell.getValue().substring(0, 1)} className="bg-purple" />
        ),
        header: () => <Header label="booster" />,
      }),
      columnHelper.accessor("status", {
        cell: (cell) => (
          <Chip
            label={cell.getValue()}
            className={getStatusCls(cell.getValue())}
          />
        ),
        header: () => <Header label="status" />,
      }),
      columnHelper.accessor("price", {
        cell: (cell) => <Td value={cell.getValue()} />,
        header: () => <Header label="price" />,
      }),
      columnHelper.accessor("createdAt", {
        cell: (cell) => <Td value={cell.getValue()} />,
        header: () => <Header label="created At" />,
      }),
      columnHelper.display({
        id: "actions",
        cell: (cell) => <Actions id={cell.row.original.id} />,
        header: () => <Header label="actions" />,
      }),
    ],
    [columnHelper]
  );
  const data = useMemo(
    () => [
      {
        game: "lol",
        summary: "Promotion from gold 1",
        id: "lol-1232",
        booster: "Duoleveling",
        price: "$14.56",
        createdAt: new Date().toDateString(),
        status: "COMPLETED",
      },
      {
        game: "lol",
        summary: "Promotion from gold 1",
        id: "lol-1233",
        booster: "Duoleveling",
        price: "$14.56",
        createdAt: new Date().toDateString(),
        status: "UNPAID",
      },
      {
        game: "lol",
        summary: "Promotion from gold 1",
        id: "lol-1232",
        booster: "Duoleveling",
        price: "$14.56",
        createdAt: new Date().toDateString(),
        status: "IN PROGRESS",
      },
      {
        game: "lol",
        summary: "Promotion from gold 1",
        id: "lol-1232",
        booster: "Duoleveling",
        price: "$14.56",
        createdAt: new Date().toDateString(),
        status: "COMPLETED",
      },
      {
        game: "lol",
        summary: "Promotion from gold 1",
        id: "lol-1232",
        booster: "Duoleveling",
        price: "$14.56",
        createdAt: new Date().toDateString(),
        status: "COMPLETED",
      },
      {
        game: "lol",
        summary: "Promotion from gold 1",
        id: "lol-1232",
        booster: "Duoleveling",
        price: "$14.56",
        createdAt: new Date().toDateString(),
        status: "COMPLETED",
      },
      {
        game: "lol",
        summary: "Promotion from gold 1",
        id: "lol-1232",
        booster: "Duoleveling",
        price: "$14.56",
        createdAt: new Date().toDateString(),
        status: "COMPLETED",
      },
    ],
    []
  );
  return (
    <Card className="rounded flex-1">
      <CardHeader className="bg-filter-200 -m-4 p-4 flex flex-col gap-[10px]">
        <div className="w-full flex justify-between">
          <Typography variant="h5" weight="bold">
            Orders
            <Typography variant="subtitle" className="align-super ml-2">
              ({data.length})
            </Typography>
          </Typography>
          <Button label="Order" leftIcon={<Plus className="!text-floral" />} />
        </div>
        <div className="w-full flex justify-between">
          <Input
            leftIcon={<Search className="!text-floral" />}
            type="text"
            placeholder="Search"
          />
          <Dropdown>
            <DropDownItem>League of Legends</DropDownItem>
          </Dropdown>
        </div>
      </CardHeader>
      <Table
        wrapperClassName="mt-4"
        bodyClassName="h-[420px]"
        columns={columns}
        data={data}
      />
      <div>
        <Dropdown variant="secondary" label="10">
          <DropDownItem>10</DropDownItem>
          <DropDownItem>20</DropDownItem>
        </Dropdown>
      </div>
    </Card>
  );
};
