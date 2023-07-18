import React from 'react'
import { Table, Column, HeaderCell, Cell } from "rsuite-table";

export default function TheatresTable(props) {
    const {theatres}=props
  return (
    <div><h3 className="m-3"> Theatres </h3>

    <Table data={theatres}>
      <Column flexGrow={1} sortable fixed resizable>
        <HeaderCell>ID</HeaderCell>
        <Cell dataKey="_id" />
      </Column>
      <Column flexGrow={1} sortable resizable>
        <HeaderCell>Name</HeaderCell>
        <Cell dataKey="name" />
      </Column>
      <Column flexGrow={1} sortable resizable>
        <HeaderCell>Description</HeaderCell>
        <Cell dataKey="description" />
      </Column>
      <Column flexGrow={1} sortable resizable>
        <HeaderCell>City</HeaderCell>
        <Cell dataKey="city" />
      </Column>
      <Column flexGrow={1} sortable resizable>
        <HeaderCell>Pincode</HeaderCell>
        <Cell dataKey="pinCode" />
      </Column>
    </Table></div>
  )
}
