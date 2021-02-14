import {io} from "socket.io-client";


const ENDPOINT = 'ws://localhost:5000/';

export default class SocketService {
    private socket: any = {};

    constructor(private emisor_id?: string) {
        this.socket = io(ENDPOINT);
    }

    public send = (message: string) => {
        this.socket.emit('postMessage', message)
    }

    // disconnect - used when unmounting
    public disconnect (): void {
        this.socket.disconnect();
    }
}