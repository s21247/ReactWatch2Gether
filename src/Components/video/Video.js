import React from 'react';

const Video = (props) => {
    return (

        <div className={'h-full '}>

            <iframe className={'bg-blue50 flex items-center justify-center' +
                ''}
                width="853"
                height="480"
                src={`https://www.youtube.com/embed/${props.link}`}
                frameBorder="0"
                allow="accelerometer;  autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
            />

        </div>



    );
};



export default Video;