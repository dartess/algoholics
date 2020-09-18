import {assertEquals} from 'https://deno.land/std@0.69.0/testing/asserts.ts';

import {SinglyLinkedList} from './SinglyLinkedList.ts';

Deno.test('Список создаётся', () => {
    new SinglyLinkedList();
});

Deno.test('Работает добавление в конец', () => {
    const list = new SinglyLinkedList();
    list.add('qwe');
    list.add('asd');
    assertEquals(list.toString(), 'qwe, asd');
});

Deno.test('Работает добавление в начало', () => {
    const list = new SinglyLinkedList();
    list.addFirst('qwe');
    list.addFirst('asd');
    assertEquals(list.toString(), 'asd, qwe');
});

Deno.test('Работает добавление в оба направления', () => {
    const list = new SinglyLinkedList();
    list.add('qwe');
    list.addFirst('asd');
    list.add('rty');
    list.addFirst('zxc');
    assertEquals(list.toString(), 'zxc, asd, qwe, rty');
});

Deno.test('Работает добавление после n-го элемента (и если его нет)', () => {
    const list = new SinglyLinkedList();
    list.add('qwe');
    list.add('asd');
    list.addAfter('zxc', 'qwe');
    list.addAfter('rty', 'qwe');
    list.addAfter('iop', 'no in list');
    assertEquals(list.toString(), 'qwe, rty, zxc, asd, iop');
});

Deno.test('Работает добавление после n-го элемента в пустой массив', () => {
    const list = new SinglyLinkedList();
    list.addAfter('iop', 'no in list');
    assertEquals(list.toString(), 'iop');
});

Deno.test('Работает удаление с начала', () => {
    const list = new SinglyLinkedList();
    list.add('qwe');
    list.add('asd');
    list.add('zxc');
    list.add('iop');
    list.removeFirst();
    list.removeFirst();
    assertEquals(list.toString(), 'zxc, iop');
});

Deno.test('Работает удаление с конца', () => {
    const list = new SinglyLinkedList();
    list.add('qwe');
    list.add('asd');
    list.add('zxc');
    list.add('iop');
    list.removeLast();
    list.removeLast();
    assertEquals(list.toString(), 'qwe, asd');
});

Deno.test('Работает удаление конкретного элемента', () => {
    const list = new SinglyLinkedList();
    list.add('qwe');
    list.add('asd');
    list.add('zxc');
    list.add('asd');
    list.add('iop');
    list.remove('asd');
    assertEquals(list.toString(), 'qwe, zxc, iop');
});

Deno.test('Ничего не удаляется при передаче несуществующего элемента', () => {
    const list = new SinglyLinkedList();
    list.add('qwe');
    list.add('asd');
    list.add('zxc');
    list.add('asd');
    list.add('iop');
    list.remove('another value');
    assertEquals(list.toString(), 'qwe, asd, zxc, asd, iop');
});

Deno.test('Операции удаления не падают на пустом списке', () => {
    (new SinglyLinkedList()).removeFirst();
    (new SinglyLinkedList()).removeLast();
    (new SinglyLinkedList()).remove('any value');
});

Deno.test('Работает создание копии', () => {
    const list = new SinglyLinkedList();
    list.add('qwe');
    list.add('zxc');
    list.add('iop');

    const copy = list.copy();
    assertEquals(list.toString() === copy.toString(), true);
    assertEquals(list === copy, false);

    copy.removeLast();
    assertEquals(list.toString() === copy.toString(), false);
});

/*
todo не понятно, как это можно протестить, если всегда есть шанс,
что перемешанный массив будет в том же порядке
Deno.test('Работает создание перемешанной копии', () => {
});
*/
