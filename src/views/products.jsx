import {Rx} from '@cycle/core';
import {h} from '@cycle/web';

export default function view(todos$) {
  return {
    DOM: todos$.map(todos =>
      h('div', [
        // add render methods here
        //vrenderHeader(todos),
        //vrenderMainSection(todos),
        //vrenderFooter(todos)
      ])
    )
  };
};