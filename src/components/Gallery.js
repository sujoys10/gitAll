import React, { Fragment } from 'react';
import ImageCard from './ImageCard';

const Gallery = ({images}) => {
    <div>The show must go on</div>
    return (
        <Fragment>
            { images.map((img,i) => (
                <ImageCard key={i} {...img} />
            ))}
        </Fragment>
    )
}

export default Gallery;