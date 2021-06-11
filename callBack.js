//par
//impar
//0 wtf


// const callback = (result) =>{
//     console.log(result);
// }

const wtfParImpar = (numero, callback) => {
    let error;
    let result;
    if (numero === 0) error = new Error('error ..WTF');
    else {
        if (numero % 2 === 0) result = 'Par';
        else result = 'Impar';
    }
    callback(error,result);
}

wtfParImpar(1, (error,result) => {
    try {

        console.log('llamada parametro 1');
        console.log('error: '+error);
        console.log('result: '+result);
        console.log('resultados');
        if(error)throw error;
        console.log(result);

    } catch (error) {
        console.error(error);
    }


})

wtfParImpar(2, (error,result) => {
    try {

        console.log('llamada parametro 2');
        console.log('error: '+error);
        console.log('result: '+result);
        console.log('resultados');
        if(error)throw error;
        console.log(result);

    } catch (error) {
        console.error(error);
    }

})

wtfParImpar(0, (error,result) => {
    try {

        console.log('llamada parametro 0');
        console.log('error: '+error);
        console.log('result: '+result);
        console.log('resultados');
        if(error)throw error;
        console.log(result);

    } catch (error) {
        console.error(error);
    }

})

//