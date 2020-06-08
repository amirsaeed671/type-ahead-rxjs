import './index.css';
import { fromEvent, from } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import {
    debounceTime,
    distinctUntilChanged,
    map,
    switchMap,
    tap,
    pluck,
    mergeMap,
    catchError,
    filter,
} from 'rxjs/operators';

const target = document.getElementById('suggestions');

const fetchData = (query) =>
    ajax(`https://api.github.com/search/repositories?q=${query}`).pipe(
        map((responseObj) => responseObj.response.items),
        mergeMap((items = []) => from(items).pipe(pluck('name'))),
        catchError(searchRepo),
    );

const searchRepo = fromEvent(document.getElementById('search'), 'keyup').pipe(
    debounceTime(200),
    tap(() => {
        target.innerHTML = '<li>Filter for a repository</li>';
    }),
    map((e) => e.target.value),
    filter((x) => x),
    distinctUntilChanged(),
    switchMap(fetchData),
    tap((value) => {
        const html = `
            <li>
                <span class='name'>${value}</span>
            </li> 
        `;
        target.innerHTML += html;
    }),
    catchError(searchRepo),
);

searchRepo.subscribe();
