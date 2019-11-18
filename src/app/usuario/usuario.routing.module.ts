//semelhante às rotas, só que referente à rota do componente atual (no caso, usuario);
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuarioComponent } from './usuario.component';
import { UsuarioCadastroComponent } from './cadastro/usuario-cadastro.component';

const routes: Routes = [

    {//assim que ele acessar a rota usuário (rota pai, no app route module), ele vai acessar o usuarioComponent 
        path: '',
        component: UsuarioComponent
    },
    {
        path:'add',
        component:UsuarioCadastroComponent
    }
];

@NgModule({
    declarations:[],
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class UsuarioRoutingModule { }
