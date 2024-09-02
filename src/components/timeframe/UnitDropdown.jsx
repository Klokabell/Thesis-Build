/* eslint-disable react/prop-types */
const UnitDropdown = ({ unitSignal, menuArray=[], onChangeHandler }) => {

  
  const unitOptions = menuArray.map((item, index) => <option value={item} key={index}>{item}</option>)

  return (
    <div>
      <select value={unitSignal.value} onChange={(e) => onChangeHandler(e, unitSignal)}>
        {unitOptions}
      </select>
    </div>
  );
};

export default UnitDropdown;