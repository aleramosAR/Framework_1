'use strict'
const Mensaje = use ('App/Models/Mensaje')
const Producto = use ('App/Models/Producto')

class PageController {

  async index({ view }) {
    const mensajes = await Mensaje.all();
    const productos = await Producto.all();

    return view.render('index', {
      mensajes: mensajes.toJSON(),
      productos: productos.toJSON()
    })
  }
  
}

module.exports = PageController
