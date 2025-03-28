export type AuthPanelType = "Login" | "Register"

export interface AuthenticationPanelTypes {
  type : AuthPanelType;
}

export interface RegisterDto {
  firstName : string,
  lastName : string,
  email : string,
  password : string
}

export interface LoginDto {
  email : string,
  password : string,
}