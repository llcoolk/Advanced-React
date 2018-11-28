const { forwardTo } = require("prisma-binding");
const { hasPermission } = require("../utils");

const Query = {
  items: forwardTo("db"),
  item: forwardTo("db"),
  itemsConnection: forwardTo("db"),
  me(parent, args, ctx, info) {
    // check if there is a current user ID
    if (!ctx.request.userId) {
      return null;
    }
    return ctx.db.query.user(
      {
        where: { id: ctx.request.userId }
      },
      info
    );
  },
  async users(parent, args, ctx, info) {
    // 1. Check if they are logged in
    if (!ctx.request.userId) {
      throw new Error("You must be logged in!");
    }
    // 2. Check if the user has the permissions to query all ther users
    hasPermission(ctx.request.user, ["ADMIN", "permissionupdate"]);

    // 3. If they do, query all the users!
    return ctx.db.query.users({}, info);
  }
  // When it is the same in prisma and yoga, then you can just forwardTo("db")

  // async items(parent, args, ctx, info) {
  //   console.log("Getting Items!!");
  //   const items = await ctx.db.query.items();
  //   return items;
  // }
};

module.exports = Query;
