export default async (data) => {
    try {
        const dataContainer = await data();
        return dataContainer.split('\n').length - 1;
    } catch (e){
        return e
    }
}
