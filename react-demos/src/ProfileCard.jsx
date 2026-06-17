import styles from "./ProfileCard.module.css";
function ProfileCard({ name }) {
  return (
    <>
      <div className={styles.card}>
        <h1 className={styles.title}>Profile Card: {name}</h1>
        <img
          className={styles.img}
          src="https://imgs.search.brave.com/73_ZyWZHFJKcM-g0OYJWnwTLm84BxMVnLi1RiJSJVDQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly80a3dh/bGxwYXBlcnMuY29t/L2ltYWdlcy93YWxs/cy90aHVtYnMvMTc2/NTcuanBn"
        />
        <p>This is a simple profile card component.</p>
      </div>
    </>
  );
}
export default ProfileCard;
