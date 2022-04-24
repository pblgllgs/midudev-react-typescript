import { Sub } from "../interfaces/interfaces";
import { SubsReponseFromApi } from "../types";
import axios from 'axios';

export const axiosSubs = async (): Promise<SubsReponseFromApi> => {
    const res = await axios.get('http://localhost:3004/subs');
    return res.data;
};

export const mapFromApiToSubs = (apiResponse: SubsReponseFromApi): Array<Sub> => {
    return apiResponse.map((subFromApi) => {
        const {
            months: subMonths,
            profileUrl: avatar,
            nick,
            description,
        } = subFromApi;
        return {
            nick,
            description,
            avatar,
            subMonths,
        };
    });
};