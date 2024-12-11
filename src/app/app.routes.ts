import { Routes } from '@angular/router';
import { InfoXcaretComponent } from './components/info-xcaret/info-xcaret.component';
import { InfoRyTVHidalgoComponent } from './components/info-ry-tvhidalgo/info-ry-tvhidalgo.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { InfoCipsaComponent } from './components/info-cipsa/info-cipsa.component';
import { InfoChevroletHuachiComponent } from './components/info-chevrolet-huachi/info-chevrolet-huachi.component';
import { InfoNubyeComponent } from './components/info-nubye/info-nubye.component';
import { InfoGayaComponent } from './components/info-gaya/info-gaya.component';
import { InfoInncolComponent } from './components/info-inncol/info-inncol.component';
import { Info2AguaComponent } from './components/info2-agua/info2-agua.component';
import { LoginUsuarioComponent } from './components/login-usuario/login-usuario.component';
import { RegistroUsuarioComponent } from './components/registro-usuario/registro-usuario.component';
import { VentanaEsperaComponent } from './components/ventana-espera/ventana-espera.component';
import { LoginAdminComponent } from './components/login-admin/login-admin.component';
import { LandingAdminComponent } from './components/landing-admin/landing-admin.component';
import { ComentariosAdminComponent } from './components/comentarios-admin/comentarios-admin.component';
import { EmpresasAdminComponent } from './components/empresas-admin/empresas-admin.component';
import { authGuard } from './guards/auth.guard';



export const routes: Routes = [
    { path: 'InfoXcaret', component: InfoXcaretComponent },
    { path: 'InfoRyTVHidalgo', component: InfoRyTVHidalgoComponent },
    { path: 'Cipsa', component: InfoCipsaComponent },
    { path: 'ChevroletHuachi', component: InfoChevroletHuachiComponent },
    { path: 'Nubye', component: InfoNubyeComponent },
    { path: 'Gaya', component: InfoGayaComponent },
    { path: 'Inncol', component: InfoInncolComponent },
    { path: '2Agua', component: Info2AguaComponent },
    { path: 'LoginUsuario', component: LoginUsuarioComponent},
    { path: 'RegistroUsuario', component: RegistroUsuarioComponent },
    { path: 'VentanaEspera', component: VentanaEsperaComponent },
    { path: 'LoginAdmin', component: LoginAdminComponent},
    { path: 'LandingAdmin', component: LandingAdminComponent, canActivate:[authGuard]},
    { path: 'EmpresasAdmin', component: EmpresasAdminComponent},
    { path: 'ComentariosAdmin', component: ComentariosAdminComponent},
    { path: '', component:InicioComponent, pathMatch:'full' },
    { path: '**', component:InicioComponent, pathMatch:'full' }
  ];
