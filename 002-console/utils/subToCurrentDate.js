const subToCurrentDate = (argv) => {
    const past = new Date();
    if(argv.year){
        past.setFullYear(past.getFullYear() - argv.year);
        return past.toISOString();
    }
    if(argv.month){
        past.setMonth(past.getMonth() - argv.month);
        return past.toISOString();
    }
    if(argv.day){
        past.setDate(past.getDate() - argv.day);
        return past.toISOString();
    }
}
export default subToCurrentDate;