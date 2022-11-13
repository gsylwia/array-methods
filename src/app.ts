const arr: number[] = [1,2,3,4,5,6,7,8,9];

const initial: number = 0;

const printItem = (item: any): void => {
    console.log(item);
}

const forEachFn = <T>(array: T[], callback: (T) => (void)) => {
    
    for (let i: number = 0; i < array.length; i++) {
        const el: T = array[i];
        callback(el)
    }
};

///////

const sumByIndex = (number: number, index: number) => {
    return number + index;
};

const mapFn = <ArrayType, ReturnType> (
    array: ArrayType[], 
    callback: (el :ArrayType, index?: number, array?: ArrayType[]) => ArrayType | ReturnType
    ) => {
        // <union-type>[]
    const newArr: (ArrayType | ReturnType)[] = [];

    for (let i= 0; i < array.length; i++) {
       newArr.push(callback(array[i], i, array))
    }

    return newArr;
};

console.log(mapFn(arr, (element, index) => element * index));

/////// GENERATOR

function* entriesFn<T>(array: T[]) {
    for (let i = 0; i < array.length; i++) {
      yield [i];
    }
}

console.log(entriesFn(arr).next());

///////

const filterFn = <T>(array: number[], callback: (T) => (boolean)) => {
	
    const newArr: number[] = [];

  	for (let i = 0; i < array.length; i++) {
        const el: number = array[i];
      
        if (callback(el)) {
            newArr.push(el)
        }
  	}

    return newArr; 
};

filterFn(arr, (number) => (number % 2) === 0)


// const reduceFn = (array, callback, initial) => {

//     for (let i = 0; i < array.length; i++) {
//         initial += array[i];
//     }
//      callback(initial)
// };

///////

const isEven = (num: number): boolean => num % 2 === 0;

const everyFn = <T>(array: T[], callback: (el: T) => boolean): boolean => {

    for (let i = 0; i < array.length; i++ ) {
        if (!callback(array[i])) {
            return false;
        }  
    }
    return true;
};

console.log(everyFn(arr, isEven));

///////

const someFn = <T>(array: T[], callback: (el: T) => boolean): boolean => {
    for (let i = 0; i < array.length;  i++ ) {
        if (callback(array[i])) {
            return true;
        }
    }
    return false;
};

console.log(someFn(arr, isEven));