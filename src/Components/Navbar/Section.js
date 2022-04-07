import React from 'react';

const Section = () => {
    return (
        <div className={'bg-hero-image w-full h-screen bg-cover bg-center' +
            ' bg-center flex px-4 '}>
            <div className={'uppercase text-center text-blue50 font-extrapolated pt-14'}>
                <h1 className={'text-4xl'}>Welcome to my page</h1>
                <h3>Watch together stuff and chat!</h3>
            </div>
        </div>
    );
};

export default Section;