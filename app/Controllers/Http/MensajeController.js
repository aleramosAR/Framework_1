'use strict'
const Mensaje = use ('App/Models/Mensaje')
const { validate } = use('Validator')

class MensajeController {
  
  async create({ request, response, session }) {
    const validation = await validate(request.all(), {
      username: 'required',
      texto: 'required'
    })

    if(validation.fails()) {
      session.withErrors(validation.messages()).flashAll();
      return response.redirect('back')
    }

    const mensaje = new Mensaje();
    const dt = new Date();

    mensaje.username = request.input('username');
    mensaje.texto = request.input('texto');
    mensaje.fecha = `${
      (dt.getMonth()+1).toString().padStart(2, '0')}/${
      dt.getDate().toString().padStart(2, '0')}/${
      dt.getFullYear().toString().padStart(4, '0')} ${
      dt.getHours().toString().padStart(2, '0')}:${
      dt.getMinutes().toString().padStart(2, '0')}:${
      dt.getSeconds().toString().padStart(2, '0')}`;

    await mensaje.save();
    return response.redirect('back');
  }
}

module.exports = MensajeController
