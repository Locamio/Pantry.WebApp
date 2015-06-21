/*
Whats this stuff do?
 */
'use strict';

import riot from 'riot';
import TodoStore from './stores/todo-store.es6';
import dispatcher from './dispatcher.es6';
import './components/eg.tag';

let todoStore = new TodoStore(dispatcher);
dispatcher.addStore(todoStore);
riot.mount('todo-app', {store: todoStore});