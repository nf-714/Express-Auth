import { IAuth, User } from "../../types/type";
import { authEmailController } from "../auth-email/auth-email.controller";

export class Auth implements IAuth {
  emailAndPassword?: {
    enable: boolean;
    requireEmailVerification?: boolean;
  };
  socialProviders?: {
    google?: {
      clientId: string;
      clientSecret: string;
    };
    facebook?: {
      clientId: string;
      clientSecret: string;
    };
    twitter?: {
      clientId: string;
      clientSecret: string;
    };
    linkedin?: {
      clientId: string;
      clientSecret: string;
    };
    github?: {
      clientId: string;
      clientSecret: string;
    };
  };
  passwordLess?: {
    enable: boolean;
    verifyEmail: (options: { user: User; url: string; token: string }) => void;
  };

  constructor(config: IAuth) {
    // Initialize properties using the config object
    this.emailAndPassword = config.emailAndPassword;
    this.socialProviders = config.socialProviders;
    this.passwordLess = config.passwordLess;
  }

  signUp(user: {
    name: string;
    email: string;
    password: string;
    image: string;
  }): void {
    const { name, email, password, image } = user;
    console.log(name, email, password, image);
    if (
      this.emailAndPassword?.enable &&
      !this.emailAndPassword?.requireEmailVerification
    ) {
      //normal authentication without email verification
      authEmailController.signup({ name, email, password, image });
    }

    if (
      this.emailAndPassword?.enable &&
      this.emailAndPassword?.requireEmailVerification
    ) {
      //email verification authentication
      authEmailController.signupEmailVerification({
        name,
        email,
        password,
        image,
      });
    }

    if (this.passwordLess?.enable == true) {
      //return passwordless signup methodology
    }
  }

  signIn(user: { email: string; password: string }): void {
    const { email, password } = user;
    if (
      this.emailAndPassword?.enable &&
      !this.emailAndPassword?.requireEmailVerification
    ) {
      authEmailController.signin({ email, password });
    }

    if (
      this.emailAndPassword?.enable &&
      this.emailAndPassword?.requireEmailVerification
    ) {
      authEmailController.signinWithUserVerified({ email, password });
    }
  }
}
