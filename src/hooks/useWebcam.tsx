import React, { useEffect } from "react";

export default function useWebcam(videoRef: React.RefObject<HTMLVideoElement>) {
    useEffect(() => {
        navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
            const videoEl = videoRef.current;
            if (videoEl) {
                videoEl.srcObject = stream;
            }
        });
    }, []);
}
