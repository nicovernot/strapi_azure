'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
    async create(ctx) {
        let entity;
        if (ctx.is('multipart')) {
          const { data, files } = parseMultipartData(ctx);
          entity = await strapi.services.adresse.create(data, { files });
        } else {
          entity = await strapi.services.adresse.create(ctx.request.body);
        }
         console.log(ctx.request.body)
        await strapi.plugins['email'].services.email.send({
            to: ctx.request.body.mail,
            from: 'niveco13380@gmail.com',
            subject: `Merci ${ctx.request.body.nom} de nous avoir contacté` ,
            text: `
             Nos vous contacterons prochainement .
    
              Cordialement,
              l\'equipe Redma
            `,
          });
  
    }
};
