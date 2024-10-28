import React from "react";
import "./ExploreMenu.css";
import { assets, menu_list } from "../../assets/assets";

function ExploreMenu({ category, setCategory }) {
  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Explore the menu</h1>
      <p className="explore-menu-text">
        Choose from a diverse menu featuring a delectable array of dishes. Our
        mission is to satisfy your craving and dining experience, one delicious
        meal at a time.
      </p>
      <div className="explore-menu-list">
        {menu_list.map((item, index) => {
          const isSelected = category === item.menu_name;
          return (
            <div
              key={index}
              className={`explore-menu-list-item ${isSelected ? 'selected' : ''}`}
              onClick={() => setCategory(item.menu_name)}
            >
              <img src={item.menu_image} alt="" />
              <p>{item.menu_name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ExploreMenu;
