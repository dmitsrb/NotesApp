/**
 * Created by Dmitry on 2/26/2017.
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
exports.setUpConnection = setUpConnection;
exports.listNotes = listNotes;
exports.createNote = createNote;
exports.deleteNote = deleteNote;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

require('../models/Note');

//noinspection JSUnresolvedVariable

var _configFilesConfigJson = require('../../configFiles/config.json');

var _configFilesConfigJson2 = _interopRequireDefault(_configFilesConfigJson);

var Note = _mongoose2['default'].model('Note');

function setUpConnection() {
    _mongoose2['default'].connect('mongodb://' + _configFilesConfigJson2['default'].db.host + ':' + _configFilesConfigJson2['default'].db.port + '/' + _configFilesConfigJson2['default'].db.name);
}

function listNotes() {
    return Note.find();
}

function createNote(data) {
    var note = new Note({
        title: data.title,
        text: data.text,
        coor: data.color,
        createdAt: new Date()
    });

    return note.save();
}

function deleteNote(id) {
    return Note.findById(id).remove();
}
//# sourceMappingURL=DataBaseUtils.js.map