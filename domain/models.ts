
export type Role = 'EMPLOYEE' | 'MANAGER' | 'HR' | 'ADMIN';
export type Visibility = 'PUBLIC' | 'PRIVATE' | 'ANONYMOUS';

export interface User {
  id: string;
  name: string;
  email: string;
  role: Role;
  team?: string | null;
}

export interface Recognition {
  id: string;
  senderId: string;
  recipientId: string;
  message: string;
  emoji?: string | null;
  visibility: Visibility;
  createdAt: string;
}
