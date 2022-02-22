import Card1 from "./Card1";
const Map1 = ({ dataList, handleDelete,  handleModal }) => {
  return (
    <>
      {dataList.map((d) => (
        <Card1 data={d} handleDelete={handleDelete}  handleModal={ handleModal} />
      ))}
    </>
  );
};
export default Map1;
