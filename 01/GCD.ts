/**
 * Алгоритм Евклида
 */
export class GCD {
    /**
     * Наибольший общий делитель двух чисел
     * @param p число
     * @param q число
     * @returns НОД
     */
    public static gcd(p: number, q: number): number {
        if (q == 0) {
            return p;
        }
        const r = p % q;
        return this.gcd(q, r);
    }
}
