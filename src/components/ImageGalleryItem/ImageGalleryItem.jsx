import style from 'components/Styles.module.css';
export default function ImageGalleryItem({ e, showModal }) {
  function handelClick(e) {
    // console.log(e.target.id);
    showModal(e.target.id);
  }
  return (
    <>
      <li className={style.ImageGalleryItem}>
        <img
          id={e.id}
          onClick={handelClick}
          className={style.ImageGalleryItemImage}
          src={e.webformatURL}
          alt={e.tags}
        />
      </li>
    </>
  );
}
