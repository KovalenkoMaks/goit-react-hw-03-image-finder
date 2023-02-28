import Searchbar from 'components/Searchbar/Searchbar';
import React, { Component } from 'react';
// import { Blocks } from 'react-loader-spinner';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import * as API from 'components/utils/API';
import style from 'components/Styles.module.css';
import { Button } from 'components/Button/Button';
// import { AppEl } from './App.styled';
// const
// axios.defaults.baseURL = `https://pixabay.com/api/?key=33294397-381f15b78d88cb787350f045d&image_type=photo&orientation=horizontal&per_page=12`;
// let test = 'tyt';
export class App extends Component {
  state = {
    search: '',
    images: [],
    btn: false,
    totalHits: 0,
    loading: false,
  };
  page = 1;

  addImages = async values => {
    this.setState({ loading: true });
    const Arr = await API.imagesArr(values);
    this.setState({
      images: Arr.hits,
      search: values,
      totalHits: Arr.totalHits,
      btn: true,
    });
    this.page = 1;
    this.setState({ loading: false });
    window.scrollTo(0, 0);
  };
  nextSearch = async () => {
    // console.log(test);
    this.setState({ loading: true });
    this.page += 1;
    const Arr = await API.NextSearch(this.state, this.page);
    // console.log(Arr);
    this.setState({ loading: false });
    this.setState(prevStats => ({
      images: [...prevStats.images, ...Arr.hits],
      totalHits: Arr.totalHits,
    }));
  };
  render() {
    // if (!this.state.btn || this.state.totalHits <= 12 * this.page) {
    //   return (
    //     <div className={style.App}>
    //       <Searchbar onSubmit={this.addImages} />
    //       <ImageGallery state={this.state}></ImageGallery>
    //     </div>
    //   );
    // }
    return (
      <>
        <div className={style.App}>
          <Searchbar onSubmit={this.addImages} />
          <ImageGallery state={this.state}></ImageGallery>

          <Button
            loading={this.state.loading}
            onClick={this.nextSearch}
          ></Button>
        </div>
      </>
    );
  }
}
