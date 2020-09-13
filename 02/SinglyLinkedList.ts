/**
 * Элемент односвязного списка
 */
class Node<T> {
    constructor(
        public readonly item: T,
        public next: Node<T> | null = null,
    ) {}
}

/**
 * Односвязный список (однонаправленный связный список)
 */
export class SinglyLinkedList<T> {
    private first: Node<T> | null = null;

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
        const newNode = new Node(newItem);
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
        const newNode = new Node(newItem, this.first);
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
            const newNode = new Node(newItem, referenceNode.next);
            referenceNode.next =  newNode;
        } else {
            const newNode = new Node(newItem);
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
        let previousNode: Node<T> | null = null;
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
        const copyOfList = new SinglyLinkedList<T>();

        SinglyLinkedList.shuffleArray(this.getAllItems())
            .forEach((item) => copyOfList.add(item));

        return copyOfList;
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

    /**
     * Хелпер для перемешивания массива
     * @param array массив для перемешивания
     * @returns перемешанный массив
     */
    private static shuffleArray<T>(array: Array<T>): Array<T> {
        let ctr = array.length;
        let temp;
        let index;
        while (ctr > 0) {
            index = Math.floor(Math.random() * ctr);
            ctr--;
            temp = array[ctr];
            array[ctr] = array[index];
            array[index] = temp;
        }
        return array;
    }
}
