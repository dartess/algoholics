/**
 * Элемент односвязного списка
 */
class SinglyLinkedListNode<T> {
    constructor(
        public readonly value: T,
        public next: SinglyLinkedListNode<T> | null = null,
    ) {}
}

/**
 * Односвязный список (однонаправленный связный список)
 */
export class SinglyLinkedList<T> {
    private head: SinglyLinkedListNode<T> | null = null;

    /**
     * Операция, проверяющая список на пустоту
     * @returns результат
     */
    isEmpty(): boolean {
        return this.head === null;
    }

    /**
     * Операция добавления значения в список (в начало)
     * @param newValue добавляемое значение
     */
    insertValueAtBeginning(newValue: T): void {
        const newNode = new SinglyLinkedListNode(newValue, this.head);
        this.head = newNode;
    }

    /**
     * Операция добавления значения в список (в конец)
     * @param newValue добавляемое значение
     */
    insertValueAtEnd(newValue: T): void {
        let lastNode = this.head;
        while (lastNode?.next) {
            lastNode = lastNode.next;
        }
        const newNode = new SinglyLinkedListNode(newValue);
        if (lastNode) {
            lastNode.next = newNode;
        } else {
            this.head = newNode;
        }
    }

    /**
     * Операция добавления значения в список (после другого значения)
     * @param newValue добавляемое значение
     * @param referenceValue значение, после которого необходимо произвести добавление, если оно будет найдено
     */
    insertAfterReferenceValue(newValue: T, referenceValue: T): void {
        let referenceNode = this.head;

        while (referenceNode?.value !== referenceValue && referenceNode?.next) {
            referenceNode = referenceNode.next;
        }

        if (referenceNode && referenceNode.value === referenceValue) {
            const newNode = new SinglyLinkedListNode(newValue, referenceNode.next);
            referenceNode.next =  newNode;
        }
    }

    /**
     * Операция получения массива значений
     */
    getAllValues(): Array<T> {
        const allValues: Array<T> = [];
        let node = this.head;
        while(node) {
            allValues.push(node.value)
            node = node.next; 
        }
        return allValues;
    }

    /**
     * Приведение значений списка к строке
     */
    toString(): string {
        return this.getAllValues().join(', ');
    }
}
