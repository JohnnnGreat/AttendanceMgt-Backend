const mongoose = require("mongoose");

const classSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  classTitle: {
    type: String,
    required: true,
  },

  numberOfStudents: {
    type: Number,
    required: true,
  },
});
