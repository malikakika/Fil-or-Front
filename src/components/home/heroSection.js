import React from 'react';

const HeroSection = () => {
    return (
        <div className="flex justify-between items-center">
            <div className="w-1/2">
                <img src="assets/heropicture.png" alt="Image" className="w-full h-auto" />
            </div>
            <div className="w-1/2 text-center">
            <h1 className="font-greatvibes text-9xl text-gray-800 mb-2">FILÉOR</h1>
                <p className="font-sans text-4xl text-gray-800">Vos vœux tressés en bijoux</p>
            </div>
        </div>
    );
}

export default HeroSection;
