import React from "react";
import { Table, Column, HeaderCell, Cell } from "rsuite-table";
import { Button } from "react-bootstrap";
import { updateBookingsById } from "../../api/bookingsApi";

const ActionCell = ({ rowData, dataKey, onClick, ...props }) => {
  return (
    <Cell {...props} style={{ padding: "6px" }}>
      <Button
        className="btn btn-success text-white"
        appearance="link"
        onClick={() => {
          onClick(rowData._id);
        }}
      >
        {rowData.status === "EDIT" ? "Save" : "Edit"}
      </Button>
    </Cell>
  );
};

const EditableCell = ({ rowData, dataKey, onChange, ...props }) => {
  const editing = rowData.status === "EDIT";
  return (
    <Cell {...props} className={editing ? "table-content-editing" : ""}>
      {editing ? (
        <input
          className="rs-input"
          defaultValue={rowData[dataKey]}
          onChange={(event) => {
            onChange && onChange(rowData._id, dataKey, event.target.value);
          }}
        />
      ) : (
        <span className="table-content-edit-span">{rowData[dataKey]}</span>
      )}
    </Cell>
  );
};

export default function BookingsTable(props) {
  const { bookings,setBookings } = props;
  const handleEditState = async (id) => {
    console.log(id);
    const nextData = Object.assign([], bookings);
    const activeItem = nextData.find((item) => item._id === id);
    activeItem.status = activeItem.status ? null : "EDIT";
    setBookings(nextData);

    if (activeItem.status === null) {
      await updateBookingsById(activeItem._id, activeItem);
      alert(`Theatre updated successfully with id ${activeItem._id}`);
    }
  };
  const handleChange = (id, key, value) => {
    console.log("inbside change");
    const nextData = Object.assign([], bookings);
    nextData.find((item) => item._id === id)[key] = value;
    setBookings(nextData);
  };

  
  return (
    <div>
      <h1 className="m-3"> Bookings </h1>

      <Table autoHeight={true} rowHeight={80} data={bookings}>
        <Column flexGrow={1} sortable fixed resizable>
          <HeaderCell>Booking Id</HeaderCell>
          <EditableCell dataKey="_id" onChange={handleChange} />
        </Column>

        <Column flexGrow={1} sortable resizable>
          <HeaderCell>User Name </HeaderCell>
          <EditableCell dataKey="userId.name" onChange={handleChange} />
        </Column>

        <Column flexGrow={1} sortable resizable>
          <HeaderCell>Movie Name </HeaderCell>
          <EditableCell dataKey="movieId.name" onChange={handleChange} />
        </Column>

        <Column flexGrow={1} sortable resizable>
          <HeaderCell>Theatre Name</HeaderCell>
          <EditableCell dataKey="theatreId.name" onChange={handleChange} />
        </Column>

        <Column flexGrow={1} sortable resizable>
          <HeaderCell>Status</HeaderCell>
          <EditableCell dataKey="status" onChange={handleChange} />
        </Column>

        <Column flexGrow={1} sortable resizable>
          <HeaderCell>Seats</HeaderCell>
          <EditableCell dataKey="noOfSeats" onChange={handleChange} />
        </Column>

        <Column flexGrow={1} sortable resizable>
          <HeaderCell>Amount</HeaderCell>
          <EditableCell dataKey="totalCost" onChange={handleChange} />
        </Column>
        <Column flexGrow={1}>
          <HeaderCell></HeaderCell>
          <ActionCell dataKey="_id" onClick={handleEditState} />
        </Column>
      </Table>
    </div>
  );
}
