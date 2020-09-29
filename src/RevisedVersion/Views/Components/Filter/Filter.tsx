import React from "react";
import { useDispatch } from "react-redux";
import { Dropdown } from "semantic-ui-react";

const Filter = () => {
  const tagOptions = [
    {
      key: "Asc",
      text: "Ascending",
      value: "Ascending",
      label: { color: "green", empty: true, circular: true },
    },
    {
      key: "Dsc",
      text: "Descending",
      value: "Descending",
      label: { color: "blue", empty: true, circular: true },
    },
  ];

  const dispatch = useDispatch();

  return (
    <Dropdown text="Sort By: Name " multiple icon="filter">
      <Dropdown.Menu>
        <Dropdown.Divider />
        <Dropdown.Menu scrolling>
          {tagOptions.map((option, index) => (
            <Dropdown.Item
              {...option}
              key={index}
              onClick={() => {
                dispatch({
                  type: `SORT_${option.value}`,
                  payload: option.value,
                });
              }}
            />
          ))}
        </Dropdown.Menu>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default Filter;
