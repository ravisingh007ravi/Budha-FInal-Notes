

export const create_user = (req, res) => {
    try {
        const data = req.body

        res.status(200).send({ status: true, message: `welcome ${data.name}` })
    }
    catch (err) { res.status(500).send({ status: false, message: err.message }) }
}

export const verify_otp = (req, res) => {
    try {

        res.status(200).send({ status: true, message: `verify otp` })
    }
    catch (err) { res.status(500).send({ status: false, message: err.message }) }
}

export const resend_otp = (req, res) => {
    try {

        res.status(200).send({ status: true, message: `resend otp` })
    }
    catch (err) { res.status(500).send({ status: false, message: err.message }) }
}

export const login = (req, res) => {
    try {

        res.status(200).send({ status: true, message: `login` })
    }
    catch (err) { res.status(500).send({ status: false, message: err.message }) }
}

// status code
// 200 => Every thing ok
// 201 => first time create new data in DB
// 400 => user side error
// 404 => data not found
// 500 => server error