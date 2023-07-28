import React from "react";
import CwedgetCard from "../CwidgetCard/CwidgetCard";
import { key } from "../../utils/constants";
export default function CWedget(props) {
  const { count,wedgetClick,show } = props;
  return (
    <>
      <div className="row m-5">
        <div className="col">
          <CwedgetCard title="Theatres"wedgetClick={wedgetClick} show={show} id={key.THEATRE} value={count.theatres} progress={{value:count.theatres}} icon="bi-building" 
          />
        </div>
        <div className="col">
          <CwedgetCard title="Movies"wedgetClick={wedgetClick} show={show}id={key.MOVIE} value={count.movies} icon="bi-film" progress={{value:count.movies}}
           />
        </div>
        <div className="col">
          <CwedgetCard title="Bookings"wedgetClick={wedgetClick} show={show}id={key.BOOKING} value={count.bookings} icon=" bi-card-list"progress={{value:count.bookings}} 
          />
        </div>
        <div className="col">
          <CwedgetCard title="Users"wedgetClick={wedgetClick} show={show}id={key.USER} value={count.users} icon="bi-people-fill"progress={{value:count.users}} 
          />
        </div>
      </div>
    </>
  );
}
