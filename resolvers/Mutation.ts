
/**
 * Mutation resolvers
 * Implement your own logic for creating/deleting recognitions
 * and for publishing subscription events.
 */
export const sendRecognition = (_: unknown, args: any, ctx: any) => {
  // TODO:
  // - validate recipient exists, message length, rate limits
  // - create recognition with createdAt
  // - push to in-memory array
  // - publish: ctx.pubsub.publish('RECOGNITION:' + args.recipientId, recognition)
  return null;
};

export const deleteRecognition = (_: unknown, args: any, ctx: any) => {
  // TODO:
  // - RBAC check
  // - delete/redact recognition by id
  return false;
};
