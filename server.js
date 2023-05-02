const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();
const multer = require('multer');

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, __dirname + '/uploads/images');
  },
  filename: function(req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + '-' + uniqueSuffix + '.jpg');
  }
});
const upload = multer({ dest: __dirname + '/uploads/images', storage });

app.use(express.static('public'));

app.post('/upload', upload.single('photo'), (req, res) => {
  if (req.file) {
    res.json(req.file);
  } else throw 'error';
});

app.listen(process.env.PORT, () => {
  console.log('Server running on port: ', process.env.PORT);
});
