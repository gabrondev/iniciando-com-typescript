export default class Validador{
    static maiorQueZero(n: number, msgErro: string) {
        if(n <= 0) throw new Error(msgErro)
    }
}