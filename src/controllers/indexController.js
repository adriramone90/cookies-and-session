const {validationResult} = require('express-validator');

let bgColor = ''

module.exports = {
    loginView:(req,res)=>{
        res.render('form',{
            session: req.session,
            css: bgColor,
            title: 'Inicio'
        });
    },

    loginProcess:(req,res)=>{
        let errors = validationResult(req)
        if(errors.isEmpty()){

            bgColor = `bgColor${req.body.color}.css`

            req.session.user = {
                name: req.body.name,
                color: req.body.color,
                email: req.body.email,
                age: req.body.age ? req.body.age : null
            }
    
            if(req.body.remember){
                const TIME_IN_MILISECONS=60000 * 100;

    
                res.cookie('color',req.session.user,{
                   expires: new Date (Date.now()+ TIME_IN_MILISECONS),
                   httpOnly: true,
                   secure:true,})
            }
    
            res.locals.user = req.session.user
                
            res.redirect("/")
        } else{
            res.render('form',{
                session: req.session,
                errors: errors.mapped(),
                css: bgColor,
                title: 'Inicio'
            })
        }
    },
    sessionView: (req,res)=>{
        res.render('session',{
            session: req.session,
            css: bgColor,
            title: 'otra vista!'
        });
    },
    exitSession: (req,res)=>{
        req.session.destroy();
        bgColor = ''
         if(req.cookies.tea){
        res.cookie('color',"",{maxAge:-1})
        }
        res.redirect("/");
    }
}