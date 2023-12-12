
import axios from "axios";
import SearchBar from './SearchBar/SearchBar'
import  { Component } from 'react';
import ImageGallery from "./ImageGallery/ImageGallery";
import Button from "./Button/Button";
import Loader from './Loader/Loader';
import {ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const perPage = 12;
const KEY = '40311007-381e26539f6c0a156243500cd';


class App extends Component {
  
    state = {
      searchName: '',
      images: [],
      currentPage: 1, 
      loading: false,      
      totalPages: 0,
      totalImages: 0,
      error: null,
    };
  
  componentDidUpdate(_, prevState) {
    
    if (
      prevState.searchName !== this.state.searchName ||
      prevState.currentPage !== this.state.currentPage
    ) {
      this.fetchData(); 
    }
  }
  
   fetchData = async () => {
     try {

        
      
       
  
      const URL = `https://pixabay.com/api/?q=${this.state.searchName}&page=${this.state.currentPage}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=${perPage}`;
       console.log(this.state.searchName);
       
      this.setState({ loading: true });
      const response = await axios.get(URL);
      const data = response.data;
       const newImages = data.hits;
       
      if (newImages.length === 0 || !this.state.searchName) {
        
        return toast.info('Sorry image not found...', {
          position: toast.POSITION.TOP_RIGHT,
        });
      }    
       
               
      this.setState(prevState => ({
        images: [...prevState.images, ...newImages],
        totalPages: Math.ceil(data.totalHits / 12),
        loading: false
      }));
   
    } catch (error) {
       console.error('Error fetching data:', error);
     
     }
     finally {
      this.setState({ loading: false }); 
    }
  };

   handleSubmit = searchQuery => {
    this.setState({
      searchName: searchQuery,
      images: [], 
      currentPage: 1, 
    }
);
  };

    loadMore = () => {
    this.setState(
      prevState => ({
        currentPage: prevState.currentPage + 1,
      })
      
    );
  };

 

  render() {
    const { images, loading, totalPages, currentPage,} = this.state;
    

    return (
      <>
         <ToastContainer transition={Slide} />
        <SearchBar onSubmit={this.handleSubmit}/>
        <ImageGallery images={images} /> 
        {images.length > 0 && totalPages !== currentPage &&  <Button onClick={this.loadMore} />}
        {loading && <Loader />}
        </>
    );
  }
}

export default App;