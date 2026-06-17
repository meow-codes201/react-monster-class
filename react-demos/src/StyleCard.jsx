import style from "./StyleCard.module.css";
function StyleCard({ message }) {
  return (
    <>
      <div className={style.card}>
        <h1 className={style.title}>{message}</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis
          magnam optio quidem veniam labore eaque libero, sapiente architecto
          incidunt voluptatum similique minus quas dolorem corporis a eum,
          itaque delectus officia. Assumenda totam eius natus itaque quae fugiat
          ipsa, asperiores expedita rerum sit ut? Distinctio perspiciatis in
          possimus quia tempore optio doloribus porro enim, ipsam cum natus
          laborum ipsa earum eius! Tempore ex ipsum fuga, corrupti, totam ipsa
          repellendus quibusdam repellat nobis doloremque, sapiente saepe
          cupiditate suscipit id. Dignissimos numquam nemo mollitia error quas
          quos illo quidem ullam optio eaque. Pariatur? Esse corrupti recusandae
          voluptas dolores porro repellendus, numquam praesentium qui ut facere
          cupiditate rem veniam quod, totam facilis unde minima quibusdam
          reiciendis voluptatem ipsa doloribus explicabo? Earum error totam
          autem. Quas quasi sunt, unde consectetur doloremque minus assumenda
          fugit repellendus molestiae obcaecati quis animi qui natus repudiandae
          ratione doloribus? Consequatur, saepe reprehenderit incidunt explicabo
          maxime alias aut labore suscipit possimus.
        </p>
      </div>
    </>
  );
}
export default StyleCard;
