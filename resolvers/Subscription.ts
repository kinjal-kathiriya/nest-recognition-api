
/**
 * Subscription resolvers
 */
export const recognitionReceived = {
  subscribe: (_: unknown, args: any, ctx: any) => {
    return ctx.pubsub.subscribe('RECOGNITION:' + args.userId);
  },
  resolve: (payload: any) => payload
};
