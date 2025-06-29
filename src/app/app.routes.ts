import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from '../components/about/about.component';
import { ServicesComponent } from '../components/services/services.component';
import { ContactComponent } from '../components/contact/contact.component';
import { HomeComponent } from '../components/home/home.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'contacto', component: ContactComponent},
    {path: 'sobre-nosotros', component: AboutComponent},
    {path: 'servicios', component: ServicesComponent},
    //{path: 'editexp/:id', component: EditExperienceComponent},
    //{path: 'editedu/:id', component: EditeducacionComponent},
    //{path: 'editpro/:id', component: EditProyectoComponent},
    //{path: 'newskill', component: NewSkillComponent},
    //{path: 'editskill/:id', component: EditSkillComponent},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AppRoutes { }

