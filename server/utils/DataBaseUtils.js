/**
 * Created by Dmitry on 2/26/2017.
 */
import mongoose from 'mongoose';
import '../models/Note';
//noinspection JSUnresolvedVariable
import config from '../../configFiles/config.json';

const Note = mongoose.model('Note');

export function setUpConnection(){
    mongoose.connect(`mongodb://${config.db.host}:${config.db.port}/${config.db.name}`)
}

export function listNotes() {
    return Note.find();
}

export function createNote(data){
    const note = new Note({
        title: data.title,
        text: data.text,
        coor: data.color,
        createdAt: new Date()
    });

    return note.save();
}

export function deleteNote(id) {
    return Note.findById(id).remove();
}
