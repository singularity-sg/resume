
/*
 * GET home page.
 */

exports.experience = function(req, res){
  res.render('experience', { title: 'Lim Han - A Collection Of Professional Experience', headerTitle: 'Experience', active: 'experience' });
};

exports.skills = function(req, res) {
  res.render('skills', { title: 'Lim Han - A Collection Of Professional Qualifications', headerTitle: 'Skills', active: 'skills' });
};

exports.contact = function(req, res) {
  res.render('contact', { title: 'Lim Han - How to contact me', headerTitle: 'Contact', active: 'contact' });
};

