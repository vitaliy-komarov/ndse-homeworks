export default async (data) => {
    try {
        const dataContainer = await data();
        const lose = dataContainer.match(/Lose/gm)?.length || 0;
        const win = dataContainer.match(/Win/gm)?.length || 0;
        return {
            win, lose
        };
    } catch (e){
        return e;
    }
}
