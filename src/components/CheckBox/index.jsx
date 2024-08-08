import React from "react";

const CheckBox = ({ item, selected, setSelected }) => {
  const handleCheckboxChange = (e) => {
    if (e.target.checked) {
      setSelected((prevSelected) => [...prevSelected, item]);
    } else {
      setSelected((prevSelected) =>
        prevSelected.filter((selectedItem) => selectedItem.id !== item.id)
      );
    }
  };

  return (
    <div className="flex items-center mt-2">
      <input
        id={`checkbox-${item.id}`}
        type="checkbox"
        className="w-4 h-4 text-orange-700 bg-gray-100 border-gray-300 rounded focus:ring-orange-700"
        onChange={handleCheckboxChange}
      />
      <label
        htmlFor={`checkbox-${item.id}`}
        className="ms-2 text-sm font-medium text-gray-900"
      >
        {item.name}
      </label>
    </div>
  );
};

export default CheckBox;
