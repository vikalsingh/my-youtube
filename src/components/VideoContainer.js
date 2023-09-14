import { useEffect, useState } from "react";

const VideoContainer = () => {
    const [searchText, setSearchText] = useState('');

    useEffect(() => {

        const timer = setTimeout(() => callTheApi(), 200);

        return () => {
            clearTimeout(timer);
        }

    }, [searchText]);

    return(
        <div className="flex">
        <Hoc />
            <div className="bg-red-400 w-14 h-12 m-4"></div>
            <div className="bg-red-400 w-14 h-12 m-4"></div>
            <div className="bg-red-400 w-14 h-12 m-4"></div>
            <div className="bg-red-400 w-14 h-12 m-4"></div>
        </div>
    );
};

export const Hoc = (VideoContainer) => {
    return (
        <div className="border-green-500">
            <VideoContainer />
        </div>
    );
};

export default VideoContainer;