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

const sumByIndex = (number: number, index: number) => {
    return number + index;
};

const mapFn = <ArrayType, ReturnType> (
    array: ArrayType[], 
    callback: (el :ArrayType, index?: number, array?: ArrayType[]) => ArrayType | ReturnType
    ) => {

    const newArr: (ArrayType | ReturnType)[] = [];

    for (let i= 0; i < array.length; i++) {
       newArr.push(callback(array[i], i, array))
    }

    return newArr;
};

console.log(mapFn(arr, (element, index) => element * index));

const entriesFn = <T>(array: T[]): (number | T)[][] => {

    const newArr = array.map((value: T, index: number) => [index , value]);
    return newArr;
}

console.log(entriesFn(arr));

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

console.log(filterFn(arr, (number) => (number % 2) === 0))


const addNum = (prev: number, current: number): number => {
  return prev + current;
};

const reduceFn =  <ArrayType, ReturnType> (
        array: ArrayType[], 
        callback: (prev: ArrayType | ReturnType, current: ArrayType, index: number ) => ArrayType | ReturnType,
        initial?: ArrayType | ReturnType
        ) => {

			let prev: ArrayType | ReturnType
      let start: number 

      if (initial) {
        prev = initial;
        start = 0;
      } else {
        prev = array[0];
        start = 1;
      }

      for (let i = start; i < array.length; i++) {
        	prev = callback(prev, array[i], i);
      }
    
    return prev;
};

console.log(reduceFn(arr, addNum));

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

const someFn = <T>(array: T[], callback: (el: T) => boolean): boolean => {
    for (let i = 0; i < array.length;  i++ ) {
        if (callback(array[i])) {
            return true;
        }
    }
    return false;
};

console.log(someFn(arr, isEven));