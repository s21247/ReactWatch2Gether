import React from 'react';

const VideoTitleForm = ({setTitle,Title}) => {

   function handleKeyDown(e) {
       if(e.key === 'Enter') {
           e.preventDefault();
           const title = e.target.value;
           setTitle(title)
           if(e.target.value.length === 0 || e.target.value.length !== 11)
               setTitle(Title)
       }
   }
    return (
        <>
            <div className={'py-1'}>
            <h1 className={'text-blue50 font-extrapolated'}>Please put youtube's video id:</h1>
            <input
                type="text"
                onKeyDown={handleKeyDown}
                required
                placeholder={"example:hl5oUp3Da8E"}
            />
            </div>
        </>
    );
};

export default VideoTitleForm;