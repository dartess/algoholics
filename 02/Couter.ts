/**
 * Тип данных счётчик
 */
export class Counter {
    private count = 0;

    /**
     * @param id - имя счётчика
     */
    constructor(private readonly id: string) {}

    /**
     * Увеличение счётчика
     */
    increment(): void {
        this.count++;
    }

    /**
     * Получение текущего значения счётчика
     */
    tally(): number {
        return this.count;
    }

    /**
     * Текстовое представление счётчика
     */
    toString(): string {
        return `${this.id}: ${this.count}`;
    }
}
