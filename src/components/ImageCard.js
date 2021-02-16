import React from 'react';

const style = {
    image_holder: {
        height: '300px',
        width: '500px'
    },
    image: {
        height: '100%',
        width: '100%'
    }
}
const ImageCard = ({urls, id}) => {
    const toggleLike = () => {
        
    }
    return (
        <div>
            <div style={style.image_holder}>
                <img style={style.image} src={urls.regular}/>
            </div>
            <button onClick={toggleLike}>like</button>
        </div>
    )
}

export default ImageCard;