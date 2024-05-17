import css from './App.module.css';
import { Toaster } from 'react-hot-toast';
import { useEffect, useState } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import ImageGallery from '../ImageGallery/ImageGallery';
import fetchData from '../../services/unsplash-api';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import ImageModal from '../ImageModal/ImageModal';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';


function App() {

  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [largeImage, setLargeImage] = useState("");
  const [totalResults, setTotalResults] = useState(0);

const per_page = 9;

  useEffect(() => {
    if (query === '') return;

    const fetchImages = async () => {
      try {
        setLoading(true);
        setError(false)
        const data = await fetchData(query, page, per_page);
        setImages((prevState) => [...prevState, ...data.results]);
        setTotalResults(data.total)
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      } 
    }
    fetchImages();
  }, [page, query]);
  
  const handleForm = async({ search }) => {
    setQuery(search)
    setPage(1);
    setImages([]);
    setTotalResults(0)
  };
  const handleLoadMore = async () => {
    setLoading(true);
    setPage(page + 1);
  }
  const handleOpenModal = (fullImage) => {
    setLargeImage(fullImage);
    setShowModal(true);
    
  }
  const handleCloseModal = () => {
    setLargeImage("");
    setShowModal(false);
  }
 
  const shouldShowBtn = images.length > 0 && !loading && images.length < totalResults;
  
  return (
    <div className={css.container}>
      <SearchBar onSubmit={handleForm}/>
      {loading && <Loader />}
      {error && (<ErrorMessage />)}
      {images.length > 0 && <ImageGallery items={images} onImageClick={handleOpenModal} />}
      {shouldShowBtn && <LoadMoreBtn handleLoadMore={handleLoadMore} />}
      <ImageModal isOpen={showModal}  onRequestClose={handleCloseModal } fullImage={largeImage}
        shouldCloseOnOverlayClick={false} />
      <Toaster position="top-right" />
     
    </div>
  )
}

export default App
