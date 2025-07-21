// import { Video } from 'lucide-react'
import React from 'react'

const VideoBackground = () => {
    return (
        <div className="relative w-screen h-[90vh] overflow-hidden">
            {/* Video Background */}
            <video
                src="/video/background-video.mp4"
                className="absolute inset-0 w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
            />
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-teal-900/100 via-teal-900/50 to-gray-400/40"></div>
            
            {/* Content Overlay */}
            <div className="relative z-10  flex items-start h-full mt-20 ml-5 px-8 md:px-16 lg:px-20">
                <div className="max-w-2xl text-white">
                    <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light mb-6 leading-tight">
                        A stay you can count on
                    </h1>
                    <p className="text-[20px] md:text-xl opacity-90 leading-relaxed font-[500]">
                        Every Sonder is unique and every stay is special. Our<br></br> standard remains the same — designer details, keyless<br></br> entry, fast, free WiFi, and 24/7 digital concierge.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default VideoBackground