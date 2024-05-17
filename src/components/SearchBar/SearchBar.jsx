import { useId } from "react";
import css from './SearchBar.module.css';
import { CiSearch } from "react-icons/ci";
import toast from 'react-hot-toast';


const SearchBar = ({ onSubmit }) => {
  const formId = useId();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const search = form.elements.search.value;
    if (search.trim() === '') {
      toast.error('Please type something')
      return
    }
    onSubmit({ search })
    form.reset();
  };

    return (
  <header className={css.container}>
  <form onSubmit={handleSubmit} className={css.form}>
    <input
      type="text"
      autoComplete="off"
      autoFocus
      name="search"
      id={formId}
      placeholder="Search images and photos"
      className={css.input}/>
          <button type="submit" className={css.button}>
              <CiSearch className={css.buttonIcon} />
          </button>
  </form>
</header>  
    )
}

export default SearchBar;