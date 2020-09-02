/**
 * Бинарный поиск
 */
export class BinarySearch {
    /**
     * Реализация бинарного поиска через цикл
     * @param key элемент
     * @param a массив
     * @return индекс элемента в массиве или -1
     */
    public static rank(key: number, a: number[]): number {
        let lo = 0;
        let hi = a.length - 1;
        while (lo <= hi) {
            let mid = Math.trunc((lo + hi) / 2);
            if (key < a[mid]) {
                hi = mid - 1;
            } else if (key > a[mid]) {
                lo = mid + 1;
            } else {
                return mid;
            }
        }
        return -1;
    }

    /**
     * Реализация бинарного поиска через рекурсию
     * @param key элемент
     * @param a массив
     * @return индекс элемента в массиве или -1
     */
    public static rankRecursive(key: number, a: number[], lo?: number, hi?: number): number {
        lo ??= 0;
        hi ??= a.length - 1;

        if (lo > hi) {
            return -1;
        }

        const mid = Math.trunc((lo + hi) / 2);
        if (key === a[mid]) {
            return mid;
        }

        if (key > a[mid]) {
            lo = mid + 1;
        } else {
            hi = mid - 1;
        }
        return this.rankRecursive(key, a, lo, hi);
    }
}
