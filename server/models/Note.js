/**
 * Created by Dmitry on 2/26/2017.
 */

import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const NoteSchema = new Schema({
    title: {type: String},
    text: {type: String, required: true},
    color: {type: String},
    createdAt: {type: Date}
});

mongoose.model('Note', NoteSchema);