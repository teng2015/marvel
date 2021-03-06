/**
* @flow
*/

'use strict';

import type {Character} from '../marvelapi/model';

export type Action =
  { type: 'SWITCH_TAB', tab: 'characters' | 'about' }
| { type: 'MAIN_ENTRY' }
| { type: 'GET_POPULAR_CHARACTERS', data: Array<Character> }
| { type: 'GET_CHARACTER_BY_NAME', data: Character }
  ;
