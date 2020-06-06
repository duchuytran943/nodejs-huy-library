const monggoose = require("mongoose");

const authorSchema = new monggoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

module.exports = monggoose.model("Author", authorSchema);
