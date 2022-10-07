import React, { useContext } from "react";
import { StateContext } from "../StateProvider";
import AsideBottom from "./AsideBottom";
import AsideTop from "./AsideTop";

function Aside() {
  const { savedItems } = useContext(StateContext);
  return (
    <aside className="common">
      <AsideTop />
      {savedItems.length > 0 && <AsideBottom savedItems={savedItems} />}
    </aside>
  );
}

export default Aside;
