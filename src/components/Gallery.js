import React, { Fragment } from 'react';
import ImageCard from './ImageCard';

const Gallery = ({images}) => {
    <div>I am ...</div>
    return (
        <Fragment>
            { images.map((img,i) => (
                <ImageCard key={i} {...img} />
            ))}
        </Fragment>
    )
}

export default Gallery;