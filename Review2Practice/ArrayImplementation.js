class Array{
    constructor(){
        this.length=0;
        this.data={};
    }

    push(value){
        this.data[this.length]=value;
        this.length++;
        return thisl
    }

    pop(){
        if(this.length===0){
            console.log("Array is Empty! Cannot Pop");
            return undefined;
        }

        delete this.data[this.length-1];
        this.length--;
    }

    get(index){
        if(index>=this.length && index>0){
            return this.data[index];
        }
    }

    
}