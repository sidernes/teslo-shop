import { Injectable } from '@nestjs/common';
import { Socket } from 'socket.io';
import { User } from '../auth/entities/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

interface ConnectedClients {
  [id: string]: {
    socket: Socket;
    user: User;
  };
}

@Injectable()
export class MessagesWsService {
  private connectedClients: ConnectedClients = {};

  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async registerClient(client: Socket, userId: string) {
    const user = await this.userRepository.findOneBy({ id: userId });
    if (!user) throw new Error('User not found');
    if (!user.isActive) throw new Error('User is inactive');
    // check if user is already connected
    this.checkUserConnection(user);

    this.connectedClients[client.id] = {
      socket: client,
      user,
    };
    console.log('connectedClients', Object.keys(this.connectedClients).length);
  }

  removeClient(clientId: string) {
    delete this.connectedClients[clientId];
  }

  getConnectedClients(): number {
    return Object.keys(this.connectedClients).length;
  }

  getConnectedClientsList(): string[] {
    // return Object.keys(this.connectedClients);
    return Object.keys(this.connectedClients).map(
      (clientId) => this.connectedClients[clientId].user.name,
    );
  }

  getUserFullName(clientId: string): string {
    return this.connectedClients[clientId].user.name;
  }

  private checkUserConnection(user: User) {
    for (const clientId of Object.keys(this.connectedClients)) {
      const connectedUser = this.connectedClients[clientId];
      if (connectedUser.user.id === user.id) {
        connectedUser.socket.disconnect(true);
        delete this.connectedClients[clientId];
        break;
      }
    }
  }
}
