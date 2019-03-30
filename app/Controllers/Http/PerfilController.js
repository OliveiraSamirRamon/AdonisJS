'use strict'

const User = use('App/Models/User')


class PerfilController {
  async carregarPerfil({auth, view}){

    const user = await User.find(auth.user.id);
    return view.render('perfil', {user: user.toJSON()});

  }

}

module.exports = PerfilController
