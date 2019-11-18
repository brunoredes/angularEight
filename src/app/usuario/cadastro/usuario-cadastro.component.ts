import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/usuario';
import { UsuarioService } from 'src/app/usuario.service';



@Component({
    selector: 'app-usuario-cadastro',
    templateUrl: './usuario-cadastro.component.html',
    styleUrls: ['../usuario.component.css']
})
export class UsuarioCadastroComponent implements OnInit {

    public usuario:Usuario = new Usuario()
    constructor(private usuarioService:UsuarioService) { }

    ngOnInit() {

    }

    public salvar(){
        this.usuarioService.salvar(this.usuario).subscribe(
            res =>{
                alert('Salvo com sucesso!')
            },
            err =>{
                alert('Algo inesperado ocorreu na hora de efetuar o registro')
            }
        )
        console.log(this.usuario)
    }

}
