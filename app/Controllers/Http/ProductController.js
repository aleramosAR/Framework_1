'use strict'
const Producto = use ('App/Models/Producto')
const { validate } = use('Validator')

class ProductController {
  async create({ request, response, session }) {
    const validation = await validate(request.all(), {
      title: 'required',
      price: 'required',
      thumbnail: 'required'
    })

    if(validation.fails()) {
      session.withErrors(validation.messages()).flashAll();
      return response.redirect('back')
    }

    const producto = new Producto();
    
    producto.title = request.input('title');
    producto.price = request.input('price');
    producto.thumbnail = request.input('thumbnail');

    await producto.save();

    return response.redirect('back');
  }

  async update({ params, request, response, session }) {
    const validation = await validate(request.all(), {
      idUP: 'required'
    })

    if(validation.fails()) {
      session.withErrors(validation.messages()).flashAll();
      return response.redirect('back')
    }

    const producto = await Producto.find(request.input('idUP'));

    if (producto) {
      producto.title = request.input('titleUP') || producto.title;
      producto.price = request.input('priceUP') || producto.price;
      producto.thumbnail = request.input('thumbnailUP') || producto.thumbnail;
      await producto.save();
    }

    return response.redirect('back');
  }

  async delete({ params, request, response, session }) {
    const validation = await validate(request.all(), {
      id: 'required'
    })

    if(validation.fails()) {
      session.withErrors(validation.messages()).flashAll();
      return response.redirect('back')
    }

    const producto = await Producto.find(request.input('id'))

    if (producto) {
      await producto.delete();
    }
    return response.redirect('back');
  }
}

module.exports = ProductController
