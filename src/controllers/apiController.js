const db = require("../database/models");

const apiControllers = {

  checkout: async function (req, res) {

    let order = await db.Order.create(
      { ...req.body, userId: req.session.usuario.id },
      {
        include: db.Order.OrderItems,
      }
    );
    res.json({ ok: true, status: 200, order: order });
  },

  discount: async function (req,res) {
    
    let discount = await db.Discount.findOne({where: {discountCode: req.body.discount}});

    if(discount != null) {
      
      res.json({ ok: true, status: 200, discount: discount.porcentage});
  
    }
    
    
    
    
  }
   
};

module.exports = apiControllers
