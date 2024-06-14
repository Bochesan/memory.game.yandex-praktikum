export const PATTERNS = {
  Name: /^[A-ZА-ЯЁ][a-zA-ZА-ЯЁ-]*$/,
  Login: /^[a-zA-Z0-9_-]{3,20}$/,
  Numbers: /^\d+$/,
  Email: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
  Password: /^(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,40}$/,
  Phone: /^\+?\d{10,15}$/,
}
