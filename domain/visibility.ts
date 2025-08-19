
import type { User, Recognition } from './models';

/**
 * Return a view-safe representation based on visibility.
 * - PUBLIC: visible broadly
 * - PRIVATE: only sender, recipient, elevated roles (define in RBAC)
 * - ANONYMOUS: hide sender for most viewers (your policy)
 */
export function maskRecognitionForViewer(
  rec: Recognition,
  viewer: User
): Recognition & { maskedSenderId?: boolean } {
  // TODO: implement your masking logic
  return rec;
}
