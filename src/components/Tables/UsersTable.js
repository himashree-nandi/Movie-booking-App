import React from 'react'
import { Table, Column, HeaderCell, Cell } from "rsuite-table";

export default function UsersTable(props) {
    const {users}=props
  return (
    <div><h3 className="m-3"> Users </h3>

    <Table autoHeight={true} rowHeight={80} data={users}>
      <Column flexGrow={1} sortable fixed resizable>
        <HeaderCell>User Id</HeaderCell>
        <Cell dataKey="userId" />
      </Column>

      <Column flexGrow={1} sortable resizable>
        <HeaderCell>User Name </HeaderCell>
        <Cell dataKey="name" />
      </Column>

      <Column flexGrow={1} sortable resizable>
        <HeaderCell>Email </HeaderCell>
        <Cell dataKey="email" />
      </Column>

      <Column flexGrow={1} sortable resizable>
        <HeaderCell>User Type</HeaderCell>
        <Cell dataKey="userTypes" />
      </Column>

      <Column flexGrow={1} sortable resizable>
        <HeaderCell>Status</HeaderCell>
        <Cell dataKey="userStatus" />
      </Column>
    </Table></div>
  )
}
