function CopyEvent() {
  const CopyHandler = () => {
    alert("STOP COPYTING MY CONTENT!");
  };
  return (
    <>
      <p onCopy={CopyHandler}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur
        maxime suscipit commodi provident. Magnam asperiores debitis deserunt
        saepe exercitationem ipsum!
      </p>
    </>
  );
}
export default CopyEvent;
