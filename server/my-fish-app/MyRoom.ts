import { Room, Client } from "colyseus";

export class MyRoom extends Room {

  onCreate (options: any) {

    this.onMessage("type", (client, message) => {
      console.log(message);
    });

  }

  onJoin (client: Client, options: any) {
  }

  onLeave (client: Client, consented: boolean) {
  }

  onDispose() {
  }

}
