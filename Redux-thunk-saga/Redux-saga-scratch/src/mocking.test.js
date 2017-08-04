class Myclass{
    sum(a,b){
        console.log('sum');
        return this.serviceCall(a,b);
    }
    serviceCall(a,b){
        return a+b;
    }
}

it.only('passes through non-function action',() => {
    let obj = new Myclass();
    Myclass.prototype.serviceCall = jest.fn(() => 3)
    let result = obj.sum(1,2);
    expect(result).toBe(3)
})