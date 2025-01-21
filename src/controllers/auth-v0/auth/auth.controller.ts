import { IAuth, User } from "../../../types/type";
import {
  authEmailController,
  signup,
} from "../auth-email/auth-email.controller";

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

  /**
   * Sign up a user with the given information
   * @param user the user information to sign up with
   * @remarks
   * If `emailAndPassword.enable` is true, this will attempt to sign up the user
   * with the given information. If `emailAndPassword.requireEmailVerification` is
   * true, it will use the email verification flow. If `passwordLess.enable` is true,
   * it will use the passwordless flow.
   */
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
      signup({ name, email, password, image });
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

  /**
   * Signs in a user with the given email and password. If email and password
   * authentication is enabled, this will attempt to sign in the user. If email
   * verification is also required, this will use the email verification flow.
   * @param user - The user object with email and password.
   */
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
