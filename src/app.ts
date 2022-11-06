
const arr: number[] = [1,2,3,4,5,6,7,8,9];
const initial = 0;
const printItem = (item: number | boolean) => {
    console.log(item);
}

const forEachFn = (array: number[], callback) => {
    
    for (let i: number = 0; i < array.length; i++) {
        const el: number = array[i];
        callback(el)
    }
};


const mapFn = (array: number[], callback) => {

    for (let i: number = 0; i < array.length; i++) {
        const el: number = array[i];
        callback(el)
    }
};

const entriesFn = (array) => {};

const filterFn = (array: number[], callback) => {
	
    const newArr: number[] = [];

  	for (let i = 0; i < array.length; i++) {
        const el: number = array[i];
        const elOperation: number = el % 2
      
        if (elOperation === 0) {
            newArr.push(el)
        }
  	} 
    callback(newArr);
};

const reduceFn = (array, callback, initial) => {

    for (let i = 0; i < array.length; i++) {
        initial += array[i];
    }
     callback(initial)
};

const everyFn = (array, callback) => {

    for (let i: number = 0; i < array.length;  i++ ) {
        const el: number = array[i];  
    }

    return callback(el < 10);
};

const someFn = (array, callback) => {
    for (let i: number = 0; i < array.length;  i++ ) {
        const el: number = array[i];  
    }

    return callback(el >= 6);
};