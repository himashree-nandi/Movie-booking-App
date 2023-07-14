import React from "react";
import { CWidgetStatsC } from "@coreui/react";
export default function CWedget(props) {
  const { count } = props;
  return (
    <>
      <div className="row m-5">
        <div className="col">
          <CWidgetStatsC
            className="mb-3"
            icon={<i class="bi bi-boombox-fill"></i>}
            color="info"
            inverse={true}
            progress={{ value: count.theatres }}
            text="Theatres"
            title="Thestres"
            value={count.theatres}
          />
        </div>
        <div className="col">
          <CWidgetStatsC
            className="mb-3"
            icon={<i class="bi bi-film"></i>}
            color="info"
            inverse={true}
            progress={{ value: count.movies }}
            text="Movies"
            title="Movies"
            value={count.movies}
          />
        </div>
        <div className="col">
          <CWidgetStatsC
            className="mb-3"
            icon={<i class="bi bi-card-list"></i>}
            color="info"
            inverse={true}
            progress={{ value: count.bookings }}
            text="Bookings"
            title="Bookings"
            value={count.bookings}
          />
        </div>
        <div className="col">
          <CWidgetStatsC
            className="mb-3"
            icon={<i class="bi bi-people-fill"></i>}
            color="info"
            inverse={true}
            progress={{ value: count.users }}
            text="Users"
            title="Users"
            value={count.users}
          />
        </div>
      </div>
    </>
  );
}
