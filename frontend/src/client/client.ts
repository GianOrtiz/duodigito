import { DuodigitResult } from "./duodigitResult";

const url = process.env.NODE_ENV === "development"
    ? 'http://localhost:8080'
    : 'https://murmuring-tundra-64612.herokuapp.com';

const fetchDuodigit = async (num: number): Promise<DuodigitResult | undefined> => {
    const res = await fetch(`${url}/duodigit?number=${num}`);
    if (res.status !== 200) {
        throw 'Something went wrong!';
    }

    const duodigitResult = await res.json() as DuodigitResult;
    return duodigitResult;
}

export default fetchDuodigit;
