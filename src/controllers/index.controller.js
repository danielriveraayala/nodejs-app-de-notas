const indexCtrl = {};

indexCtrl.renderIndex = (req, res) => {
    res.render('index');
};

indexCtrl.renderAlumno = (req, res) => {
    res.render('alumno');
};

module.exports = indexCtrl;