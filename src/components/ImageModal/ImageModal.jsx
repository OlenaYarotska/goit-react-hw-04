import Modal from 'react-modal';
import css from './ImageModal.module.css';

const ImageModal = ({ isOpen, onRequestClose, fullImage }) => {
    return (
    <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            shouldCloseOnEsc={true}
            shouldCloseOnOverlayClick={true}
            className={css.modal}
            overlayClassName={css.overlay}
        >
            {fullImage && <img src={fullImage} alt="Large view" className={css.image} />} 
    </Modal>
    )
}

export default ImageModal;