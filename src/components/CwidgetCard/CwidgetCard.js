import React from "react";
import { CWidgetStatsC } from "@coreui/react";
import './widget.css'
export default function CwedgetCard(props) {
  const { value, title, icon ,progress,id,wedgetClick,show} = props;
  return (
    <div>
      <CWidgetStatsC
      onClick={()=>wedgetClick(id)}
        className="mb-3 box"
        icon={<i className={`bi ${icon}`}></i>}
        color={show[id]?"danger":"black"}
        inverse={true}
        progress={progress}
        text="Theatres"
        title={title}
        value={value}
      />
    </div>
  );
}
