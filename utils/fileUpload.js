const multer = require("multer");
const path = require("path");

// Creating and set storage
const storage = multer.diskStorage({
  destination: "./public/uploads/",
  filename: function (req, file, cb) {
    cb(
      null,
      file.filename + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

// Initilaize upload func
const upload = multer({
  storage,
  limits: { fileSize: 10000000 },
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb);
  },
});

// Check file for image format
function checkFileType(file, cb) {
  const filetypes = /jpeg|png|jpg|gif/;
  const extname = filetypes.test(
    path.extname(file.originalname).toLocaleLowerCase()
  );
  const mimetype = filetypes.test(file.mimetype);

  if (mimetype && extname) {
    return cb(null, true);
  }

  return cb("Error: You can only upload image files");
}

module.exports = upload;
