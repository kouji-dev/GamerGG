"use client";
import {Header, Table, Td} from "@/ui/Table";
import { useMemo } from "react";
import { Column } from "react-table";
import { Avatar } from "@/ui/Avatar";
import { Button, Typography } from "@/ui";
import { Chip } from "@/ui/Chip";
import { getStatusCls } from "@/ui/utils/status";
import { Card, CardHeader } from "@/ui/Card";
import {PaidTwoTone} from "@/ui/icons/paidTwoTone";
import {Menu} from "@/ui/icons/menu";
import {createColumnHelper} from "@tanstack/table-core";
import {Actions, Order} from "@/app/client-area/orders/orders-list";

export const OrdersSummaryList = () => {
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
        status: "COMPLETED",
      },
      {
        game: "lol",
        summary: "Promotion from gold 1",
        id: "lol-1232",
        booster: "Duoleveling",
        status: "UNPAID",
      },
      {
        game: "lol",
        summary: "Promotion from gold 1",
        id: "lol-1232",
        booster: "Duoleveling",
        status: "INPROGRESS",
      },
      {
        game: "lol",
        summary: "Promotion from gold 1",
        id: "lol-1232",
        booster: "Duoleveling",
        status: "COMPLETED",
      },
      {
        game: "lol",
        summary: "Promotion from gold 1",
        id: "lol-1232",
        booster: "Duoleveling",
        status: "COMPLETED",
      },
      {
        game: "lol",
        summary: "Promotion from gold 1",
        id: "lol-1232",
        booster: "Duoleveling",
        status: "COMPLETED",
      },
      {
        game: "lol",
        summary: "Promotion from gold 1",
        id: "lol-1232",
        booster: "Duoleveling",
        status: "COMPLETED",
      },
    ],
    []
  );
  return (
    <Card className="rounded flex-1">
      <CardHeader>
        <Typography variant="h6" weight="bold">
          Orders
        </Typography>
        <PaidTwoTone />
      </CardHeader>
      <Table
        wrapperClassName="mt-4"
        bodyClassName="h-[174px]"
        columns={columns}
        data={data}
      />
    </Card>
  );
};
