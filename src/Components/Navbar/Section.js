import React, {useState} from 'react';
import Video from "../video/Video";
import VideoTitleForm from "../forms/VideoTitleForm";

const Section = () => {
    const [title, setTitle] = useState("rokGy0huYEA")

    return (
        <div className={'bg-hero-image w-full h-screen bg-cover bg-center' +
            ' bg-center flex px-4 '}>
            <div>
                <div className={'uppercase text-center text-blue50 font-extrapolated pt-14'}>
                    <h1 className={'text-4xl'}>Welcome to my page</h1>
                    <h3>Watch together stuff and chat!</h3>
                </div>
                <div className={'px-10 pt-10'}>
                    <VideoTitleForm setTitle={setTitle} Title={title}/>

                    <Video link={title}/>
                </div>
            </div>


        </div>


    );
};

export default Section;