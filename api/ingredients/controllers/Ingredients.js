'use strict';

/**
 * Ingredients.js controller
 *
 * @description: A set of functions called "actions" for managing `Ingredients`.
 */

module.exports = {

  /**
   * Retrieve ingredients records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    return strapi.services.ingredients.fetchAll(ctx.query);
  },

  /**
   * Retrieve a ingredients record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.ingredients.fetch(ctx.params);
  },

  /**
   * Count ingredients records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.ingredients.count(ctx.query);
  },

  /**
   * Create a/an ingredients record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.ingredients.add(ctx.request.body);
  },

  /**
   * Update a/an ingredients record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.ingredients.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an ingredients record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.ingredients.remove(ctx.params);
  }
};
