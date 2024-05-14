import { internalMutation, internalQuery } from "./_generated/server";
// there are internal and external queries
// Internal Queries can be run by only our backend whereas external queries can be run by external frontend as well
import { v } from "convex/values";
export const create = internalMutation({
  args: {
    username: v.string(),
    imageUrl: v.string(),
    clerkId: v.string(),
    email: v.string(),
  },
  handler: async (ctx, args) => {
    await ctx.db.insert("users", args);
  },
});

export const get = internalQuery({
  args: { clerkId: v.string() },
  async handler(ctx, args) {
    return await ctx.db
      .query("users")
      .withIndex("by_clerkid", (q) => q.eq("clerkId", args.clerkId))
      .unique();
  },
});
