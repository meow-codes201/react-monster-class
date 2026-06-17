import style from "./StyleCard.module.css";
function StyleCard({ message }) {
  return (
    <>
      <div className={style.card}>
        <h1 className={style.title}>{message}</h1>
      </div>
    </>
  );
}
export default StyleCard;
