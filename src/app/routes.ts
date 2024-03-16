import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';

const routeConfig: Routes = [
    {
        path: '',
        component: HomeComponent,
        pathMatch: 'full', // Esta opción asegura que la ruta vacía se corresponda exactamente con la URL raíz
        data: { title: 'Home Page' } // Puedes agregar metadatos adicionales a la ruta, como el título de la página
    },
    {
        path: 'sobre-nosotros',
        component: AboutComponent,
        data: { title: 'About Us' }
    },
    {
        path: 'servicios',
        component: ServicesComponent,
        data: { title: 'Our Services' }
    },
    {
        path: 'contacto',
        component: ContactComponent,
        data: { title: 'Contact Us' }
    },
    // Puedes agregar más rutas aquí según sea necesario
];

export default routeConfig;
