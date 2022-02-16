const multer = require('multer')
const multerS3 = require('multer-s3')
const aws = require('aws-sdk')
aws.config.loadFromPath(__dirname + '/../config/s3.json')

const s3 = new aws.S3()
const upload = multer({
    storage: multerS3({
        s3: s3,
        bucket: 'mini-project-image-upload',
        acl: 'public-read',
        key: function (req, file, cb) {
            console.log(req)
            cb(null, Date.now() + '.' + file.originalname.split('.').pop())
            // cb(null, `${userId}_profile_picture`)
        },
    }),
})
module.exports = upload
