const addToCurrentDate = (argv) => {
    const future = new Date();
    if(argv.year){
        future.setFullYear(future.getFullYear() + argv.year);
        return future.toISOString();
    }
    if(argv.month){
        future.setMonth(future.getMonth() + argv.month);
        return future.toISOString();
    }
    if(argv.day){
        future.setDate(future.getDate() + argv.day);
        return future.toISOString();
    }
}

export default addToCurrentDate;