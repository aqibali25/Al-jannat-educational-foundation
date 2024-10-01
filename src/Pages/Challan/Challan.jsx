import ChallanForm from "../../Components/Challan/ChallanForm";

const Challan = () => {
  return (
    <div className="copiesOfChallan">
      <ChallanForm copyTag={"Student"} label={1}></ChallanForm>
      <ChallanForm copyTag={"Office"} label={2}></ChallanForm>
      <ChallanForm copyTag={"Bank"} label={3}></ChallanForm>
    </div>
  );
};

export default Challan;
