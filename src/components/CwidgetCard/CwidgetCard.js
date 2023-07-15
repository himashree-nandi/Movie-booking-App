import React, { useContext } from "react";
import { CWidgetStatsC } from "@coreui/react";
import './widget.css'
import { WedgetContext } from "../../pages/Admin/Admin";
export default function CwedgetCard(props) {
  const { value, title, icon ,progress,id} = props;
  const {wedgetClick,show}=useContext(WedgetContext)
  return (
    <div>
      <CWidgetStatsC
      onClick={()=>wedgetClick(id)}
        className="mb-3 box"
        icon={<i className={`bi ${icon}`}></i>}
        color={show[id]?"info":"black"}
        inverse={true}
        progress={progress}
        text="Theatres"
        title={title}
        value={value}
      />
    </div>
  );
}
