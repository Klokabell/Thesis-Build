// eslint-disable-next-line react/prop-types
const SetDateButton = ({ addDay }) => {


  return (
    <button
      className="inline-block rounded border-2 border-[#fafafa] 
        px-6 pb-[6px] pt-2 
        text-xs font-medium uppercase leading-normal text-[#fafafa] 
        transition-all duration-150 ease-in-out 
        hover:border-primary-accent-300 hover:bg-heading-back hover:text-primary-accent-300 
        active:scale-95 
        focus:outline-none"
      onClick={addDay}
    >
      Next Day
    </button>
  );
};

export default SetDateButton;
