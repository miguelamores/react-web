// import 'rxjs'
import { Observable } from 'rxjs/Observable';
import { mergeMap, catchError, map } from 'rxjs/operators'
import { combineEpics, ofType } from 'redux-observable'
import { getShowsSuccess } from '../actions/actions'
import rxRequest from 'universal-rx-request';

export const fetchShowsEpic = action$ => 
    action$.pipe(
        ofType('GET_SHOWS'),
        mergeMap(action =>
            rxRequest({
                method: 'get',
                url: 'https://api.tvmaze.com/shows/5'
            }).pipe(
                map(response => getShowsSuccess(response))
                )
                // ,
                // catchError(error => console.log(error))
            )
    )
        
