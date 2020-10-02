import {Client, Room} from "colyseus.js";


document.addEventListener('DOMContentLoaded', async () => {
    const client = new Client(process.env.gameServer || 'ws://localhost:2567');

    const room: Room = await client.joinOrCreate("my_room");

    const handleInput = (ev: KeyboardEvent) => {
        if (ev.code === "Space") {
            room.send("type", {"name": "Dhruvi"});
        }
        }

        document.addEventListener('keydown', handleInput)
    });

