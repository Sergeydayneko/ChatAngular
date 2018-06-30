import {ExitRegistrationGuard} from "./guards/registration.guard";
import {RegistrationComponent} from "./registration/registration.component";
import {LoginComponent} from "./login/login.component";

// TODO посмотреть как изменяется loadChildren
export const appRoutesAuth = [
  {
    path: "registration",
    component: RegistrationComponent,
    canDeactivate: [ExitRegistrationGuard]
  },
  { path: "login", component: LoginComponent },
  {
    path: "admin",
    loadChildren: "app/CSApplication/CSComponents/authorization/admin/admin.module#AdminModule"
  }
];
