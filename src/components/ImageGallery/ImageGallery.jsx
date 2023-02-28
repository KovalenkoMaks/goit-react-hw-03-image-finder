import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import style from 'components/Styles.module.css';
export default function ImageGallery({ state }) {
  //   console.log(state);
  return (
    <>
      <ul className={style.ImageGallery}>
        {state.images.map(e => {
          return <ImageGalleryItem key={e.id} e={e} />;
        })}
      </ul>
    </>
  );
}
// <ImageGalleryItem images={state.images} />;
