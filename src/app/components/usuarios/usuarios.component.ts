import { Component } from '@angular/core';
import {CommonModule} from '@angular/common'
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.css'
})
export class UsuariosComponent {

  i:number = 0
  usuarios:User[] = [] 
  constructor(private userService: UserService){}

  getUsers(){
    this.userService.getAllUsers().subscribe(
      {
        next: res =>this.usuarios = res ,
        error: err => console.log(err)
      }
    )
  }

  deleteUser(id:string){
    this.userService.deleteUser(id).subscribe({
      next: () => {
        // alert("Usuario deletado com sucesso!")
        this.getUsers()
      },
      error: () => alert("Erro ao deletar o usuario")
    })
  }
}


