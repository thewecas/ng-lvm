export interface User {
  uid?: string,
  employeeId: string,
  name: string,
  email: string,
  role: string,
  designation: string;
  isDeleted: boolean;
}