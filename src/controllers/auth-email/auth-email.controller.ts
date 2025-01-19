import { IUser } from "../../types/type";

interface IAuthEmail {
  signup: (user: IUser) => void;
  signin: (user: { email: string; password: string }) => void;
  signupEmailVerification: (user: IUser) => void;
  signinWithUserVerified: (user: { email: string; password: string }) => void;
}

class AuthenticationWithEmailController implements IAuthEmail {
  async signup(user: IUser) {
    console.log("From Auth Email Controller normal signup", user);
  }

  async signin(user: { email: string; password: string }) {
    console.log("From Auth Email Controller normal signin", user);
    console.log(user);
  }

  async signupEmailVerification(user: IUser) {
    console.log("From Auth Email Controller email verification signup", user);
  }

  async signinWithUserVerified(user: { email: string; password: string }) {
    console.log("From Auth Email Controller for verified user sign-in", user);
  }
}

export const authEmailController = new AuthenticationWithEmailController();
