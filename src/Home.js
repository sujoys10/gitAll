import React, { Suspense, useState, useEffect, useRef } from 'react';
import Layout from './components/Layout';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPhotos } from './redux/action/gallery';
import imageReducer from './redux/reducer/gallery';
import Gallery from './components/Gallery';

 const Home = (props) => {
    const [searchTerm, setSearchTerm] = useState('art');
    const state = useSelector(state => state.imageReducer)
    const dispatch = useDispatch();
    const [ element, setElement ] = useState(null);
    const page = useRef(1)
    const observer = useRef(new IntersectionObserver((entries) => {
            if(entries[0].isIntersecting){
                load();
            } 
    }, {
        root: document.getElementById('gallery'),
        rootMargin: '0px',
        threshold: 1.0
    }))

    useEffect(() => {
        page.current = 1;
        load();
    },[searchTerm])

    useEffect(() => {
        const currentObserver = observer.current;
        const currentElement = element;
        if(currentElement){
            currentObserver.observe(element);
        }

        return () => {
            if(currentElement){
                currentObserver.unobserve(currentElement)
            }
        }
    },[element])

    
    const load = () => {
        dispatch(fetchPhotos(searchTerm, page.current));
        page.current +=1;
    }

    return (
        <Suspense fallback={<div>loading...</div>}>
            <Layout>
                <div id="home">
                    Home
                    <div id="gallery">
                        { state.images.length !== 0 && <Gallery images={state.images} />}
                        
                        { !state.loading && <div ref={setElement} id="loadImg" style={{ border: '1px solid red', height: '80px', width: '100px'}} >
                            'load...'
                        </div>}
                    </div>
                   
                </div>
            </Layout>
        </Suspense>
    )
}

export default Home;