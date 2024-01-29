import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { MessagesWsService } from './messages-ws.service';
import { Server, Socket } from 'socket.io';
import { NewMessageDto } from './dto/new-message.dto';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from 'src/auth/interfaces';

@WebSocketGateway({ cors: true })
export class MessagesWsGateway
  implements OnGatewayConnection, OnGatewayDisconnect
{
  @WebSocketServer() wss: Server;
  constructor(
    private readonly messagesWsService: MessagesWsService,
    private readonly jwtService: JwtService,
  ) {}

  async handleConnection(client: Socket) {
    const token = client.handshake.headers.authorization as string;
    let payload: JwtPayload;
    try {
      payload = this.jwtService.verify(token);
      await this.messagesWsService.registerClient(client, payload.id);
    } catch (error) {
      client.disconnect(true);
      return;
    }

    // console.log({ payload });
    // this.messagesWsService.getConnectedClientsList().forEach((clientId) => {
    //   this.wss
    //     .to(clientId)
    //     .emit('clients-updated', [
    //       ...this.messagesWsService.getConnectedClientsList(),
    //     ]);
    // });
    this.wss.emit(
      'clients-updated',
      this.messagesWsService.getConnectedClientsList(),
    );
  }

  handleDisconnect(client: Socket) {
    this.messagesWsService.removeClient(client.id);
  }

  @SubscribeMessage('message-from-client')
  handleClientMessage(client: Socket, payload: NewMessageDto): void {
    // emit to client only
    // client.emit('message-from-server', {
    //   id: client.id,
    //   message: payload.message,
    // });
    // emit to all clients except sender
    // client.broadcast.emit('message-from-server', {
    //   id: client.id,
    //   message: payload.message,
    // });
    // emit to all clients
    this.wss.emit('message-from-server', {
      name: this.messagesWsService.getUserFullName(client.id),
      message: payload.message,
    });
    // this.wss.emit('message-from-server', payload);
    console.log(client.id, payload);
  }
}
