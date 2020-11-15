import { User, SignUpInfo } from "../../models";

export enum ActionTypes {
  USER_SET_CURRENT = "USER_SET_CURRENT",
  GOOGLE_SIGN_IN_START = "GOOGLE_SIGN_IN_START",
  EMAIL_SIGN_IN_START = "EMAIL_SIGN_IN_START",
  SIGN_IN_SUCCESS = "SIGN_IN_SUCCESS",
  SIGN_IN_FAILURE = "SIGN_IN_FAILURE",
  CHECK_USER_SESSION = "CHECK_USER_SESSION",
  SIGN_OUT_START = "SIGN_OUT_START",
  SIGN_OUT_SUCCESS = "SIGN_OUT_SUCCESS",
  SIGN_OUT_FAILURE = "SIGN_OUT_FAILURE",
  SIGN_UP_START = "SIGN_UP_START",
  SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS",
  SIGN_UP_FAILURE = "SIGN_UP_FAILURE",
}

export const setCurrentUser = (user: User | null) => ({
  type: ActionTypes.USER_SET_CURRENT,
  payload: user,
});

export const googleSignInStart = () => ({
  type: ActionTypes.GOOGLE_SIGN_IN_START,
});

export const emailSignInStart = (emailAndPassword: {
  email: string;
  password: string;
}) => ({
  type: ActionTypes.EMAIL_SIGN_IN_START,
  payload: emailAndPassword,
});

export const signInSuccess = (user: User) => ({
  type: ActionTypes.SIGN_IN_SUCCESS,
  payload: user,
});

export const signInFailure = (error: string) => ({
  type: ActionTypes.SIGN_IN_FAILURE,
  payload: error,
});

export const checkUserSession = () => ({
  type: ActionTypes.CHECK_USER_SESSION,
});

export const signOutStart = () => ({
  type: ActionTypes.SIGN_OUT_START,
});

export const signOutSuccess = () => ({
  type: ActionTypes.SIGN_OUT_SUCCESS,
});

export const signOutFailure = (error: string) => ({
  type: ActionTypes.SIGN_OUT_FAILURE,
  payload: error,
});

export const signUpStart = (userCredentials: SignUpInfo) => ({
  type: ActionTypes.SIGN_UP_START,
  payload: userCredentials,
});

export const signUpSuccess = ({
  user,
  additionalData,
}: {
  user: User;
  additionalData: unknown;
}) => ({
  type: ActionTypes.SIGN_UP_SUCCESS,
  payload: { user, additionalData },
});

export const signUpFailure = (error: string) => ({
  type: ActionTypes.SIGN_UP_FAILURE,
  payload: error
});
