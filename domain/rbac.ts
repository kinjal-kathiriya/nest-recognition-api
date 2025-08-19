
import type { Role, Recognition, User } from './models';

export const canViewAnalytics = (role: Role) => ['MANAGER', 'HR', 'ADMIN'].includes(role);
export const canDeleteRecognition = (role: Role) => ['MANAGER', 'HR', 'ADMIN'].includes(role);

// Example helper: who can see PRIVATE items (you decide the rules)
export function canSeePrivate(rec: Recognition, viewer: User): boolean {
  // TODO: e.g., sender, recipient, or elevated roles
  return false;
}
