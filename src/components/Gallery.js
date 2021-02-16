import React, { Fragment } from 'react';
import ImageCard from './ImageCard';

const Gallery = ({images}) => {

    return (
        <Fragment >
            { images.map((image,i) => (
                <ImageCard key={i} {...image} />
            ))}
        </Fragment>
    )
}

export default Gallery;