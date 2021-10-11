import { DuodigitResult } from "./duodigitResult";

const url = 'http://localhost:8080'

const fetchDuodigit = async (num: number): Promise<DuodigitResult | undefined> => {
    const res = await fetch(`${url}/duodigit?number=${num}`);

    console.log(res.status);
    if (res.status !== 200) {
        throw 'Something went wrong!';
    }

    const duodigitResult = await res.json() as DuodigitResult;
    return duodigitResult;
}

export default fetchDuodigit;
