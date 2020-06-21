const {Schema, model} = require("mongoose");

const NoteSchema = new Schema(
    {
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        user: {
            type: String,
            required: true
        }
    },
    {
        timestamps: {type: Date, default: Date.now()}
    }
);

module.exports = model("Note", NoteSchema);
