import React, { useContext } from "react";
import { Button } from "reactstrap";
import { StateContext } from "../StateProvider";

function AsideBottom({ savedItems }) {
  const { handleAddBackItem, handleItemRemoveFromSaved } =
    useContext(StateContext);
  return (
    <div className="right-bottom">
      <h6>Saved Items</h6>
      <ul>
        {savedItems.map((s) => {
          return (
            <li key={s.id} className="saved-item">
              <span>{s.title}</span>
              <span>${s.price}</span>
              <div className="saved-item-actions">
                <Button onClick={() => handleAddBackItem(s.id)} color="primary">
                  Add back
                </Button>
                <Button
                  onClick={() => handleItemRemoveFromSaved(s.id)}
                  color="danger"
                >
                  Remove
                </Button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default AsideBottom;
