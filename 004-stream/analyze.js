import {gamesCount, logReader, winAndLose} from "./utils/index.js";
export default async (filename) => {
    const data = logReader(filename)
    const count = await gamesCount(data);
    const {win, lose} = await winAndLose(data);
    console.log(`Games count: ${count}\nWins: ${win}\nLoses: ${lose}\nWins per game: ${Math.round((win/count) * 100)}%`);
}
