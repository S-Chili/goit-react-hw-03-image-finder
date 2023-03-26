import React from 'react';
import css from './ImageGallery.module.css'

const ImageGalleryItem = ({ item, onClick }) => (
    <li key={item.id}
        className={css.ImageGalleryItem}
        onClick={() => onClick(item.id)}
    >
        <img src={item.webformatURL} alt={item.tags} className={css.ImageGalleryItem_image} />
    </li>
);

export default ImageGalleryItem;