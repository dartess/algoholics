interface INode<T> {
    readonly item: T;
    next: INode<T> | null;
}

/**
 * Односвязный список (однонаправленный связный список)
 */
export class SinglyLinkedList<T> {
    private first: INode<T> | null = null;

    /**
     * Операция, проверяющая список на пустоту
     * @returns результат
     */
    isEmpty(): boolean {
        return this.first === null;
    }

    /**
     * Метод отображает присутствует ли искомое значение в списке
     * @param item искомое значение
     * @returns результат
     */
    find(item: T): boolean {
        let node = this.first;
        while(node) {
            if (node.item === item) {
                return true;
            }
            node = node.next; 
        }
        return false;
    }

    /**
     * Метод добавления значения в конец списка
     * @param newItem добавляемое значение
     */
    add(newItem: T): void {
        let lastNode = this.first;
        while (lastNode?.next) {
            lastNode = lastNode.next;
        }
        const newNode = new SinglyLinkedList.Node(newItem);
        if (lastNode) {
            lastNode.next = newNode;
        } else {
            this.first = newNode;
        }
    }

    /**
     * Метод добавления значения в начало списка
     * @param newItem добавляемое значение
     */
    addFirst(newItem: T): void {
        const newNode = new SinglyLinkedList.Node(newItem, this.first);
        this.first = newNode;
    }

    /**
     * Метод добавления значения после искомого (или в конец списка)
     * @param newItem добавляемое значение
     * @param referenceItem значение, после которого необходимо произвести добавление, если оно будет найдено
     */
    addAfter(newItem: T, referenceItem: T): void {
        let referenceNode = this.first;

        while (referenceNode?.item !== referenceItem && referenceNode?.next) {
            referenceNode = referenceNode.next;
        }

        if (referenceNode && referenceNode.item === referenceItem) {
            const newNode = new SinglyLinkedList.Node(newItem, referenceNode.next);
            referenceNode.next =  newNode;
        } else {
            const newNode = new SinglyLinkedList.Node(newItem);
            if (referenceNode) {
                referenceNode.next = newNode;
            } else {
                this.first = newNode;
            }
        }
    }

    /**
     * Метод добавления значения после определённого по порядку элемента списка (или в конец списка)
     * @param newItem добавляемое значение
     * @param referenceIndex индекс элемента в списке, после которого нужно добавить элемент
     */
    addAfterIndex(newItem: T, referenceIndex: number): void {
        let currentIndex = 0;
        let referenceNode = this.first;

        while (currentIndex !== referenceIndex && referenceNode?.next) {
            referenceNode = referenceNode.next;
            currentIndex++;
        }

        if (referenceNode && currentIndex === referenceIndex) {
            const newNode = new SinglyLinkedList.Node(newItem, referenceNode.next);
            referenceNode.next =  newNode;
        } else {
            const newNode = new SinglyLinkedList.Node(newItem);
            if (referenceNode) {
                referenceNode.next = newNode;
            } else {
                this.first = newNode;
            }
        }
    }

    /**
     * Метод удаления первого элемента списка
     */
    removeFirst(): void {
        if (this.first) {
            this.first = this.first.next;
        }
    }

    /**
     * Метод удаления последнего элемента списка
     */
    removeLast(): void {
        let previousLastNode = null;
        let lastNode = this.first;
        while (lastNode?.next) {
            previousLastNode = lastNode;
            lastNode = lastNode.next;
        }
        if (lastNode && previousLastNode) {
            previousLastNode.next = null;
        }
    }

    /**
     * Метод удаления всех элементов списка равных ключу поиска
     * @param newItem искомое значение
     */
    remove(item: T): void {
        let previousNode: INode<T> | null = null;
        let node = this.first;
        while (node) {
            if (node.item === item) {
                if (previousNode) {
                    previousNode.next = node.next;
                } else {
                    this.first = node.next;
                }
            }
            previousNode = node;
            node = node.next;
        }
    }

    /**
     * Метод создания копии объекта списка
     * @returns копия списка
     */
    copy(): SinglyLinkedList<T> {
        const copyOfList = new SinglyLinkedList<T>();
        let node = this.first;
        while (node) {
            copyOfList.add(node.item);
            node = node.next;
        }
        return copyOfList;
    }

    /**
     * Метод создания копии объекта списка с перемешанными связями в случайном порядке
     * @returns перемешанная копия списка
     */
    shuffle(): SinglyLinkedList<T> {
        const shuffledList = new SinglyLinkedList<T>();

        // элементов нет
        if (this.first === null) {
            return shuffledList;
        }

        shuffledList.add(this.first.item);

        // элемент один
        if (this.first.next === null) {
            return shuffledList;
        }

        // элементов несколько
        let lastItemIndex = 0;
        let node: INode<T> | null = this.first.next;
        while (node) {
            let insertAfterIndex = SinglyLinkedList.getRandomInteger(-1, lastItemIndex);
            if (insertAfterIndex === -1) {
                shuffledList.addFirst(node.item);
            } else {
                shuffledList.addAfterIndex(node.item, insertAfterIndex);
            }
            lastItemIndex++;
            node = node.next;
        }
        return shuffledList;
    }

    /**
     * Операция получения массива значений
     * @returns массив значений
     */
    private getAllItems(): Array<T> {
        const allItems: Array<T> = [];
        let node = this.first;
        while(node) {
            allItems.push(node.item)
            node = node.next; 
        }
        return allItems;
    }

    /**
     * Приведение значений списка к строке
     */
    toString(): string {
        return this.getAllItems().join(', ');
    }

    /** Итератор по списку */
    *[Symbol.iterator]() {
        let node = this.first;
        while(node) {
            yield node.item;
            node = node.next; 
        }
    };

    /**
     * Получить случайное число из диапазона
     * @param from - от (включительно)
     * @param to - до (включительно)
     * @returns - случаное число
     */
    private static getRandomInteger(from: number, to: number): number {
        return Math.floor(Math.random() * (to + 1 - from) + from);
    }

    /**
    * Класс элемента односвязного списка
    */
    private static Node = class<T> implements INode<T> {
        constructor(
            public readonly item: T,
            public next: INode<T> | null = null,
        ) {}
    }
}
