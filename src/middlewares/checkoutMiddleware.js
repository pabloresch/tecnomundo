checkoutMiddleware = function (req, res, next) {
    if (!req.session.usuario) {
       return res.render('logIn.ejs', {message: 'Debes ingresar como Usuario para ir al Carrito'});
    }
    next();
}

module.exports = checkoutMiddleware