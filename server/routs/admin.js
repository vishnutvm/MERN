
let express = require('express');
let router = express.Router();
let adminHelper = require('../helpers/adminHelper')
const jwt = require('jsonwebtoken')


//loginAdmin

router.post('/api/login', (req, res) => {
    console.log("admin here");
    console.log(req.body);
    adminHelper.doAdminLogin(req.body).then((response) => {

        if (response.status) {
            const token = jwt.sign({
                userId: response.user._id,
                name: response.user.name,
                email: response.user.email
            },
                'SKey5flwx'
            )
            return res.json({ status: 'ok', user: token })
        } else {

            res.json({ status: 'error', user: false })
        }

    })
})

///api/userDetails
router.get('/api/userDetails', async (req, res) => {
    const token = req.headers['x-access-token']

    try {

        const verified = jwt.verify(token, 'SKey5flwx')
        console.log(verified);
        if (verified) {

            const user = await adminHelper.findallUser()
            console.log(user);
            return res.json({ status: 'ok', userDetails: user })

        } else {
            // Access Denied
            return res.status(401).send(error);
        }

    } catch (error) {
        console.log(error);
        res.json({ status: 'error', error: 'invalid token' })

    }



})
///api/delectUser
router.post('/api/delectUser', async (req, res) => {
    const token = req.headers['x-access-token']

    try {

        const verified = jwt.verify(token, 'SKey5flwx')
        console.log(verified);
        if (verified) {
            console.log(req.body);
            await adminHelper.delectUser(req.body.id).then((responce)=>{
                return res.json({ status: 'ok'})
            })


        } else {
            // Access Denied
            return res.status(401).send(error);
        }

    } catch (error) {
        console.log(error);
        res.json({ status: 'error', error: 'invalid token' })

    }



})
///api/editUser
router.post('/api/editUser', async (req, res) => {
    const token = req.headers['x-access-token']

    try {

        const verified = jwt.verify(token, 'SKey5flwx')
        console.log(verified);
        if (verified) {
            console.log(req.body);
            await adminHelper.editUser(req.body).then((responce)=>{
                return res.json({ status: 'ok'})
           })


        } else {
            // Access Denied
            return res.status(401).send(error);
        }

    } catch (error) {
        console.log(error);
        res.json({ status: 'error', error: 'invalid token' })

    }



})

module.exports = router;