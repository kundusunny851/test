const express = require('express');
const app = express();
const port = 3000;


const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + '-' + file.originalname);
    }
  });

const upload = multer({ storage: storage });


app.post('/upload', upload.single('file'), (req, res) => {
    // Handle the uploaded file
    res.json({ message: 'File uploaded successfully!' , file: req.file});
  });


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});





// const pickle = require('pickle');
// const model = pickle.load('img.pkl');

// app.post('/upload', upload.single('file'), (req, res) => {
//   // Handle the uploaded file
//   const image = fs.readFileSync(req.file.path);

//   const predictions = model.predict(image);

//   res.json({ message: 'File uploaded successfully!', predictions });
// });
