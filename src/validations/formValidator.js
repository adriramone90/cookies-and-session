const {check} = require('express-validator')

formValidator = [
    check('name')
        .notEmpty().withMessage('El nombre es requerido'),
    check('color').notEmpty().withMessage('El color es requerido'),
    check('email')
        .notEmpty().withMessage('El email es requerido')
        .isEmail().withMessage('Debe ser un email válido'),
    check('age').isNumeric().withMessage('La edad debe ser un número')
]

module.exports = formValidator