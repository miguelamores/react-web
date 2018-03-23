import { mergeMap, map, tap } from 'rxjs/operators'
import { ofType } from 'redux-observable'
import { getShowsSuccess } from '../actions/actions'
import ajax from 'universal-rx-request';

export const fetchShowsEpic = action$ => 
    action$.pipe(
        ofType('GET_SHOWS'),
        tap(val => console.log(`BEFORE MERGE MAP: ${val.type}`)),
        mergeMap(action =>
            ajax({
                method: 'get',
                url: 'https://api.tvmaze.com/shows/5'
            }).pipe(
                map(response => getShowsSuccess(response.body))
                )
                // ,
                // catchError(error => console.log(error))
            )
    )
        
