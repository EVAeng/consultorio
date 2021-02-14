import React, { useState } from 'react';


export default function Video() {
    const videoReference = React.createRef<HTMLVideoElement>();
    const [videoAvailable, setVideoAvailable] = useState(false);
    const [audioAvailable, setAudioAvailable] = useState(false);

    const getPermissions = async () => {
        try {
            await navigator.mediaDevices
                .getUserMedia({ video: true })
                .then(() => setVideoAvailable (true))
                .catch(() => setVideoAvailable(false));

            await navigator.mediaDevices
                .getUserMedia({ audio: true })
                .then(() => setAudioAvailable(true))
                .catch(() => setAudioAvailable(false));

            if (videoAvailable || audioAvailable) {
                navigator.mediaDevices
                    .getUserMedia({ video: videoAvailable, audio: audioAvailable })
                    .then((stream) => {
                        if (videoReference.current) {
                            videoReference.current.srcObject = stream;
                        }
                    })
                    .then((stream) => {})
                    .catch((e) => console.log(e));
            }
        } catch (e) {
            console.log(e);
        }
    };
    getPermissions()

    return (<div>
        <video ref={videoReference} id="player" autoPlay>
            </video>
    </div>);
}
