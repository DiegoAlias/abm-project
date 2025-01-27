import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  imports: [CommonModule],
})
export class UserComponent {
  users = [
    { user_id: 1, username: 'admin', role: 'Admin', rubro: 'Coso' },
    { user_id: 2, username: 'john.doe', role: 'Employee', rubro: 'Coso2' },
  ];

  addUser() {
    const newUser = {
      user_id: this.users.length + 1,
      username: `user${this.users.length + 1}`,
      role: 'Employee',
      rubro: 'Coso',
    };
    this.users.push(newUser);
    alert(`Usuario agregado: ${newUser.username}`);
  }

  editUser(user: {
    user_id: number;
    username: string;
    role: string;
    rubro: string;
  }) {
    alert(`Editar usuario: ${user.username}`);
  }

  deleteUser(userId: number) {
    this.users = this.users.filter((user) => user.user_id !== userId);
  }
}
