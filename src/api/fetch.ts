import { SubsReponseFromApi } from '../types';
import { Sub } from '../interfaces/interfaces'

export const fetchSubs = async (): Promise<SubsReponseFromApi> => {
    const res = await fetch('http://localhost:3004/subs');
    return await res.json();
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
