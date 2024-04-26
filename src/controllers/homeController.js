exports.paginaInicial = (req, res) => {
    //req.session.usuario = { nome: 'Douglas', logado: true }
    console.log(req.session.usuario)
    res.render('index');
}