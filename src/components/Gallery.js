import React, { Fragment } from 'react';
import ImageCard from './ImageCard';

const Gallery = ({images}) => {
    <fiv> lrets do it</fiv>
    return (
        <Fragment>
            { images.map((img,i) => (
                <ImageCard key={i} {...img} />
            ))}
        </Fragment>
    )
}

export default Gallery;