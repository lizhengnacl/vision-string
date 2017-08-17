/**
 * * Created by lee on 2017/8/17
 */
'use strict';

import test from 'ava';
import b from '../index';

test(t => {
    let { length, getLength, isDouble} = b;

    t.is(getLength('asdfghjkl'), 9);
    t.is(getLength('@#$%^&*()'), 9);
    t.is(getLength('123456789'), 9);
    t.is(getLength('.........'), 9);
    t.is(getLength('中中中中中'), 10);
    t.is(getLength('😄😄😄😄😄'), 10);

    t.is(isDouble('中'), true);
    t.is(isDouble('😄'), true);
    t.is(isDouble('1'), false);
    t.is(isDouble('a'), false);
    t.is(isDouble('@'), false);

    t.is(length('1a中', 1), '1');
    t.is(length('1a中', 2), '1a');
    t.is(length('1a中', 3), '1a');
    t.is(length('1a中', 4), '1a中');
    t.is(length('1a中😄', 6), '1a中😄');
    t.is(length('1a中😄😄', 8), '1a中😄😄');
});