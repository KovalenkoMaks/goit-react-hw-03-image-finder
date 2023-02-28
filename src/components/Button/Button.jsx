import style from 'components/Styles.module.css';
import { Blocks } from 'react-loader-spinner';

function Button({ onClick, loading }) {
  //   const handleSubmit = e => {
  //     console.log(e);
  //   };
  return (
    <>
      <button type="button" className={style.Button} onClick={onClick}>
        {loading ? (
          <Blocks
            visible={true}
            height="80"
            width="80"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
          />
        ) : (
          'Load More'
        )}
      </button>
    </>
  );
}

export { Button };
