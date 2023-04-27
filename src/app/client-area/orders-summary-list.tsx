"use client";
import { Table } from "@/ui/Table";
import { useMemo } from "react";
import { Column } from "react-table";
import { Avatar } from "@/ui/Avatar";
import { Button, Typography } from "@/ui";
import { Chip } from "@/ui/Chip";
import { getStatusCls } from "@/ui/utils/status";
import { Card, CardHeader } from "@/ui/Card";
import {PaidTwoTone} from "@/ui/icons/paidTwoTone";
import {Menu} from "@/ui/icons/menu";

export const OrdersSummaryList = () => {
  const columns = useMemo<Array<Column>>(
    () => [
      {
        Header: () => (
          <Typography variant="table-head" transform="uppercase" weight="bold">
            Game
          </Typography>
        ),
        accessor: "game",
        Cell: ({ value }) => <Avatar label={value} className="bg-purple" />,
        maxWidth: 80,
      },
      {
        Header: () => (
          <Typography variant="table-head" transform="uppercase" weight="bold">
            Summary
          </Typography>
        ),
        accessor: "summary",
        Cell: ({ value }) => (
          <Typography variant="table-body">{value}</Typography>
        ),
        maxWidth: 400,
        width: 220,
      },
      {
        Header: () => (
          <Typography variant="table-head" transform="uppercase" weight="bold">
            Id
          </Typography>
        ),
        accessor: "id",
        Cell: ({ value }) => (
          <Typography variant="table-body">{value}</Typography>
        ),
      },
      {
        Header: () => (
          <Typography variant="table-head" transform="uppercase" weight="bold">
            Booster
          </Typography>
        ),
        accessor: "booster",
        Cell: ({ value }) => (
          <Typography variant="table-body">{value}</Typography>
        ),
      },
      {
        Header: () => (
          <Typography variant="table-head" transform="uppercase" weight="bold">
            Status
          </Typography>
        ),
        accessor: "status",
        Cell: ({ value }) => (
          <Chip label={value} className={getStatusCls(value)} />
        ),
        width: 100,
      },
      {
        Header: () => (
          <Typography variant="table-head" transform="uppercase" weight="bold">
            Actions
          </Typography>
        ),
        accessor: "actions",
        Cell: () => <Button leftIcon={<Menu className="!text-floral" />} />,
      },
    ],
    []
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
