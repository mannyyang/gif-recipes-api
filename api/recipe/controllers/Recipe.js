'use strict';

/**
 * Recipe.js controller
 *
 * @description: A set of functions called "actions" for managing `Recipe`.
 */

module.exports = {

  /**
   * Retrieve recipe records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    return strapi.services.recipe.fetchAll(ctx.query);
  },

  /**
   * Retrieve a recipe record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.recipe.fetch(ctx.params);
  },

  /**
   * Count recipe records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.recipe.count(ctx.query);
  },

  /**
   * Create a/an recipe record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.recipe.add(ctx.request.body);
  },

  /**
   * Update a/an recipe record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.recipe.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an recipe record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.recipe.remove(ctx.params);
  }
};
