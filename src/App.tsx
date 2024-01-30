import { useRef, useState } from "react";
import Header from "./components/Header";
import LoadingSpinner from "./components/LoadingSpinner";
import * as faceapi from "face-api.js";
import { TranslateExpressions } from "./lib/utils";
import ResultMessage from "./components/ResultMessage";
import useWebcam from "./hooks/useWebcam";
import useLoadModels from "./hooks/useLoadModels";

function App() {
    const [expressions, setExpressions] = useState("");
    const [loading, setLoading] = useState(true);
    const videoRef = useRef<HTMLVideoElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    console.log(videoRef.current);

    useWebcam(videoRef);
    useLoadModels();

    async function handleLoadedMetadata() {
        const videoEl = videoRef.current as HTMLVideoElement;
        const canvasEl = canvasRef.current as HTMLCanvasElement;

        if (!videoEl || !canvasEl) return;
        const detection = await faceapi
            .detectSingleFace(
                videoEl as HTMLVideoElement,
                new faceapi.TinyFaceDetectorOptions()
            )
            .withFaceLandmarks()
            .withFaceExpressions();
        console.log(detection);

        if (detection) {
            const primaryExpression = detection.expressions.asSortedArray()[0];
            setExpressions(primaryExpression.expression);
            const dimensions = {
                width: videoEl?.width,
                height: videoEl?.height,
            };

            faceapi.matchDimensions(canvasEl, dimensions);
            const resizedResults = faceapi.resizeResults(detection, dimensions);
            faceapi.draw.drawDetections(canvasEl, resizedResults);
            faceapi.draw.drawFaceLandmarks(canvasEl, resizedResults);
            faceapi.draw.drawFaceExpressions(canvasEl, resizedResults);
            setLoading(false);
        }

        setTimeout(handleLoadedMetadata, 1000);
    }

    return (
        <main className="min-h-screen flex flex-col lg:flex-row md:justify-between gap-14 xl:gap-40 p-10 items-center container mx-auto">
            <Header />
            <section className="flex flex-col gap-6 flex-1 w-full">
                <div className="bg-white rounded-xl p-2">
                    <div className="relative flex items-center justify-center aspect-video w-full">
                        {/* Substitua pela Webcam */}
                        <div className="aspect-video rounded-lg bg-gray-300 w-full">
                            <div className="relative">
                                <video
                                    onLoadedMetadata={handleLoadedMetadata}
                                    autoPlay
                                    ref={videoRef}
                                ></video>
                                <canvas className="absolute inset-0 h-full w-full"></canvas>
                            </div>
                        </div>
                        {/* Substitua pela Webcam */}
                    </div>
                </div>
                <div
                    className={`bg-white rounded-xl px-8 py-6 flex gap-6 lg:gap-20 items-center h-[200px] ${
                        loading ? "justify-center" : "justify-between"
                    }`}
                >
                    {loading ? (
                        <div className="flex items-center justify-center text-6xl text-amber-300">
                            <LoadingSpinner />
                        </div>
                    ) : (
                        <>
                            <span className="lg:text-8xl text-6xl">
                                {expressions &&
                                    TranslateExpressions(expressions)}
                            </span>
                            <h3 className="text-xl text-right lg:text-4xl md:text-3xl text-neutral-500 font-secondary">
                                <ResultMessage expression={expressions} />
                            </h3>
                        </>
                    )}
                </div>
            </section>
        </main>
    );
}

export default App;
