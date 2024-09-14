import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';
import { UserComponent } from "../user/user.component";
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [CommonModule, UserComponent, ReactiveFormsModule],
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.css'
})
export class UsuariosComponent implements OnInit {

  i: number = 0
  usuarios: User[] = []
  userForm!: FormGroup 
  user!:User 

  constructor(private userService: UserService) {

   this.userForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl('')
  })

  }


  ngOnInit(): void {
    this.getUsers()
  }

  getUsers() {
    this.userService.getAllUsers().subscribe(
      {
        next: res => this.usuarios = res,
        error: err => console.log(err)
      }
    )
  }

  addUser() {
    this.userService.addUser(this.userForm.value).subscribe({
      next: res => {
        alert("Usuario cadastrado com sucesso!")
        this.getUsers()
        this.userForm.reset()
      },
      error: err => alert(err)
    })
  }


  deleteUser(id: string) {
    this.userService.deleteUser(id).subscribe({
      next: () => {
        // alert("Usuario deletado com sucesso!")
        this.getUsers()
      },
      error: () => alert("Erro ao deletar o usuario")
    })
  }
}


