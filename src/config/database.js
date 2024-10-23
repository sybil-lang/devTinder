const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://charuprabha228:vaHCXcN4gMfMNyAi@cluster0.lpkicec.mongodb.net/devTinderdb"
    // "mongodb+srv://namastedev:tzamitWl60wLhktw@namastenode.rc211ms.mongodb.net/devTinder"
  );
};

module.exports = connectDB;
