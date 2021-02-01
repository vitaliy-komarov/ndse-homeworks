const getCurrentDate = (argv) => {
    const now = new Date();
    const part = Object.keys(argv)[2]
    return part === 'year' 
    ? now.getFullYear() 
    : part === 'month'
        ? now.getMonth()
        : now.getDate()
}

export default getCurrentDate;