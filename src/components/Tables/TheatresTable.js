import React from "react";
import { Button } from "react-bootstrap";
import { Table, Column, HeaderCell, Cell } from "rsuite-table";
import { deleteTheatresById, updateTheatresById } from "../../api/theatreApi";
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

// delete action
const DeleteCell = ({ rowData, dataKey, onClick, ...props }) => {
  return (
    <Cell {...props} style={{ padding: "6px" }}>
      <Button
        appearance="link"
        className="text-white"
        variant="danger"
        onClick={() => {
          onClick(rowData._id);
        }}
      >
        {rowData.status === "Delete" ? "Save" : "Delete"}
      </Button>
    </Cell>
  );
};
export default function TheatresTable(props) {
  const { theatres, setTheatres } = props;

  // update theatre
  const handleEditState = async (id) => {
    console.log(id);
    const nextData = Object.assign([], theatres);
    const activeItem = nextData.find((item) => item._id === id);
    activeItem.status = activeItem.status ? null : "EDIT";
    setTheatres(nextData);

    if (activeItem.status === null) {
      await updateTheatresById(activeItem._id, activeItem);
      alert(`Theatre updated successfully with id ${activeItem._id}`);
    }
  };
  const handleChange = (id, key, value) => {
    console.log("inbside change");
    const nextData = Object.assign([], theatres);
    nextData.find((item) => item._id === id)[key] = value;
    setTheatres(nextData);
  };

  // onchange event for delete
  const handleDeleteState = async (id) => {
    console.log(id);
const nextData = theatres.filter(item => item._id !== id);
setTheatres(nextData);
    await deleteTheatresById(id);
    alert(`Theatre deleted successfully with id ${id}`)    
 };

  return (
    <div>
      <h1 className="m-3"> Theatres </h1>

      <Table data={theatres}>
        <Column flexGrow={1} sortable fixed resizable>
          <HeaderCell>ID</HeaderCell>
          <EditableCell dataKey="_id" onChange={handleChange} />
        </Column>
        <Column flexGrow={1} sortable resizable>
          <HeaderCell>Name</HeaderCell>
          <EditableCell dataKey="name" onChange={handleChange} />
        </Column>
        <Column flexGrow={1} sortable resizable>
          <HeaderCell>Description</HeaderCell>
          <EditableCell dataKey="description" onChange={handleChange} />
        </Column>
        <Column flexGrow={1} sortable resizable>
          <HeaderCell>City</HeaderCell>
          <EditableCell dataKey="city" onChange={handleChange} />
        </Column>
        <Column flexGrow={1} sortable resizable>
          <HeaderCell>Pincode</HeaderCell>
          <EditableCell dataKey="pinCode" onChange={handleChange} />
        </Column>
        <Column flexGrow={1}>
          <HeaderCell></HeaderCell>
          <ActionCell dataKey="_id" onClick={handleEditState} />
        </Column>
        <Column flexGrow={1}>
          <HeaderCell></HeaderCell>
          <DeleteCell dataKey="_id" onClick={handleDeleteState} />
        </Column>
      </Table>
    </div>
  );
}
