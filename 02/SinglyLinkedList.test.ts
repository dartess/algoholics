import {SinglyLinkedList} from './SinglyLinkedList';

test('Список создаётся', () => {
    new SinglyLinkedList();
});

test('Работает добавление в конец', () => {
    const list = new SinglyLinkedList();
    list.add('qwe');
    list.add('asd');
    expect(list.toString()).toBe('qwe, asd');
});

test('Работает добавление в начало', () => {
    const list = new SinglyLinkedList();
    list.addFirst('qwe');
    list.addFirst('asd');
    expect(list.toString()).toBe('asd, qwe');
});

test('Работает добавление в оба направления', () => {
    const list = new SinglyLinkedList();
    list.add('qwe');
    list.addFirst('asd');
    list.add('rty');
    list.addFirst('zxc');
    expect(list.toString()).toBe('zxc, asd, qwe, rty');
});

test('Работает добавление после n-го элемента (и если его нет)', () => {
    const list = new SinglyLinkedList();
    list.add('qwe');
    list.add('asd');
    list.addAfter('zxc', 'qwe');
    list.addAfter('rty', 'qwe');
    list.addAfter('iop', 'no in list');
    expect(list.toString()).toBe('qwe, rty, zxc, asd, iop');
});

test('Работает добавление после n-го элемента в пустой массив', () => {
    const list = new SinglyLinkedList();
    list.addAfter('iop', 'no in list');
    expect(list.toString()).toBe('iop');
});

test('Работает удаление с начала', () => {
    const list = new SinglyLinkedList();
    list.add('qwe');
    list.add('asd');
    list.add('zxc');
    list.add('iop');
    list.removeFirst();
    list.removeFirst();
    expect(list.toString()).toBe('zxc, iop');
});

test('Работает удаление с конца', () => {
    const list = new SinglyLinkedList();
    list.add('qwe');
    list.add('asd');
    list.add('zxc');
    list.add('iop');
    list.removeLast();
    list.removeLast();
    expect(list.toString()).toBe('qwe, asd');
});

test('Работает удаление конкретного элемента', () => {
    const list = new SinglyLinkedList();
    list.add('qwe');
    list.add('asd');
    list.add('zxc');
    list.add('asd');
    list.add('iop');
    list.remove('asd');
    expect(list.toString()).toBe('qwe, zxc, iop');
});

test('Ничего не удаляется при передаче несуществующего элемента', () => {
    const list = new SinglyLinkedList();
    list.add('qwe');
    list.add('asd');
    list.add('zxc');
    list.add('asd');
    list.add('iop');
    list.remove('another value');
    expect(list.toString()).toBe('qwe, asd, zxc, asd, iop');
});

test('Операции удаления не падают на пустом списке', () => {
    (new SinglyLinkedList()).removeFirst();
    (new SinglyLinkedList()).removeLast();
    (new SinglyLinkedList()).remove('any value');
});

test('Работает создание копии', () => {
    const list = new SinglyLinkedList();
    list.add('qwe');
    list.add('zxc');
    list.add('iop');

    const copy = list.copy();
    expect(list.toString() === copy.toString()).toBe(true);
    expect(list === copy).toBe(false);

    copy.removeLast();
    expect(list.toString() === copy.toString()).toBe(false);
});

/*
todo не понятно, как это можно протестить, если всегда есть шанс,
что перемешанный массив будет в том же порядке
test('Работает создание перемешанной копии', () => {
});
*/
