
import * as Query from './Query.js';
import * as Mutation from './Mutation.js';
import * as Subscription from './Subscription.js';

export default {
  Query,
  Mutation,
  Subscription,
  Recognition: {
    sender: (rec: any, _args: any, ctx: any) => {
      // TODO: look up sender and apply ANONYMOUS/PRIVATE rules using ctx.viewer
      return null;
    },
    recipient: (rec: any, _args: any, ctx: any) => {
      // TODO: look up recipient
      return null;
    }
  }
};
