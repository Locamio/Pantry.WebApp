/*
Whats this stuff do?
 */
'use strict';

import riot from 'riot';
import TodoStore from './stores/todo-store.js';
import dispatcher from './dispatcher.js';
import './views/tags.js'

let todoStore = new TodoStore(dispatcher);
dispatcher.addStore(todoStore);
riot.mount('todo-app', {store: todoStore});