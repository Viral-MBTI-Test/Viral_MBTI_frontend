import './loading.css'
import face1 from './images/face1.png'
import face2 from './images/face2.png'
import face3 from './images/face3.png'
import face4 from './images/face4.png'
import face5 from './images/face5.png'
import { useState, useEffect, useRef } from 'react';

const Loading = (props: { 'type': string }) => {
    const images = [face1, face2, face3, face4, face5];
    const [imageNumber, setImageNumber] = useState<number>(1);


    const useInterval = (callback: Function) => {
        const savedCallback = useRef<any>();

        useEffect(() => {
            savedCallback.current = callback;
        });

        useEffect(() => {
            const tick = () => {
                savedCallback.current();
            }

            let id = setInterval(tick, 500);
            return () => clearInterval(id);
        }, []);
    }

    useInterval(() => {
        setImageNumber((imageNumber + 1) % 4);
    });

    return (
        <div className="loading-container">
            <div className="loading-content-container">
                <div className="loading-content-image" >
                    <img src={images[imageNumber]} width="100px"></img>
                </div>
                <div className="loading-content">
                    {props.type !== 'login' ? '결과 만드는중 ...' : '로그인중 ...'}

                </div>
            </div>
        </div>
    )
}

export default Loading;