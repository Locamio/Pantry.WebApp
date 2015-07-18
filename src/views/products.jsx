import {Rx} from 'cyclejs';
import {h} from 'cyclejs';

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