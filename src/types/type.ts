export interface IJWTPayload {
  id: string;
  name: string;
  email: string;
  isVerified: boolean;
  access_token: string;
  refresh_token: string;
}

export interface User {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  email: string;
  emailVerified: boolean;
  name: string;
  image?: string | null | undefined;
}

export interface IAuth {
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
}

export interface IUser {
  name: string;
  email: string;
  password?: string;
  image?: string | null | undefined;
}

export interface IAuthEmail {
  signup: (user: IUser) => void;
  signin: (user: IUser) => void;
}
