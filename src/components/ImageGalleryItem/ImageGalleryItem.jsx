import style from 'components/Styles.module.css';
export default function ImageGalleryItem({ e }) {
  return (
    <>
      <li className={style.ImageGalleryItem}>
        <img
          className={style.ImageGalleryItemImage}
          src={e.webformatURL}
          alt={e.tags}
        />
      </li>
    </>
  );
}
