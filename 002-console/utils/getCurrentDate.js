const getCurrentDate = (argv) => {
    const now = new Date();
    const part = Object.keys(argv)[2];
    switch (part) {
        case 'year':
        case 'y':
            return now.getFullYear();
        case 'month':
        case 'm':
            return now.getMonth();
        case 'day':
        case 'd':
            return now.getDate();
        default:
            return 'Option is invalid'
    }
}

export default getCurrentDate;
