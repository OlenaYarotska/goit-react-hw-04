import ImageCard from "../ImageCard/ImageCard";
import css from './ImageGallery.module.css';

const ImageGallery = ({ items, onImageClick }) => {
	return (
		<div className={css.container}>
        	<ul className={css.items}>
				{items.map(({ id, urls, alt_description }) => {
				return(
					<ImageCard
						key={id}
						urls={urls}
						alt_description={alt_description}
						onClick={onImageClick}
						largeImage={urls.regular}
					/>
				)})}
			</ul>
		</div>
    )
}
export default ImageGallery;