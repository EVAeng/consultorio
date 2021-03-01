import React, { useEffect, useState } from 'react';
import SocketService from '../services/SocketService';

interface VideoProps {
	width: number;
	height: number;
}

export default function Video(props: VideoProps) {
	const videoReference = React.createRef<HTMLVideoElement>();
	const [ videoAvailable, setVideoAvailable ] = useState(false);
	const [ audioAvailable, setAudioAvailable ] = useState(false);
	useEffect(() => {
		const socketService = new SocketService();
		socketService.send('1');

        console.log('mount it!');
        
        return function cleanup() {
            socketService.disconnect();
        }
	}, []);


	const getPermissions = async () => {
		try {
			await navigator.mediaDevices
				.getUserMedia({ video: true })
				.then(() => setVideoAvailable(true))
				.catch(() => setVideoAvailable(false));

			await navigator.mediaDevices
				.getUserMedia({ audio: true })
				.then(() => setAudioAvailable(true))
				.catch(() => setAudioAvailable(false));

			if (videoAvailable || audioAvailable) {
				navigator.mediaDevices
					.getUserMedia({
						video: { width: props.width, height: props.height, facingMode: 'user' },
						audio: audioAvailable
					})
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
	getPermissions();

	return (
		<div>
			<video ref={videoReference} id="player" autoPlay />
		</div>
	);
}
