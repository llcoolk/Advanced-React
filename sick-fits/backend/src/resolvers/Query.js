const { forwardTo } = require("prisma-binding");

const Query = {
  items: forwardTo("db"),
  item: forwardTo("db"),
  itemsConnection: forwardTo("db"),
  // When it is the same in prisma and yoga, then you can just forwardTo("db")

  // async items(parent, args, ctx, info) {
  //   console.log("Getting Items!!");
  //   const items = await ctx.db.query.items();
  //   return items;
  // }
};

module.exports = Query;
