import {ExitRegistrationGuard} from "./guards/registration.guard";
import {RegistrationComponent} from "./registration/registration.component";
import {LoginComponent} from "./login/login.component";

export const appRoutesAuth = [
  {
    path: "registration",
    component: RegistrationComponent,
    canDeactivate: [ExitRegistrationGuard]
  },
  { path: "login", component: LoginComponent }
];
