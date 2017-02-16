import { Injectable } from '@angular/core';
import { Http /*, Response */ } from '@angular/http';

import 'rxjs';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PraiseApi {
    private baseUrl = 'https://praise-app.firebaseio.com/';
    constructor(public http: Http) { }

    getAllPraises() {
        return new Promise(resolve => {
            this.http.get('../assets/praises/praises_english.json')
            .subscribe(res => resolve(res.json()));
        })
    }

    getAllTeluguPraises() {
        return new Promise(resolve => {
            this.http.get('../assets/praises/praises_telugu.json')
            .subscribe(res => resolve(res.json()));
        })
    }

    getAllQuotes() {
        return new Promise(resolve => {
            this.http.get('../assets/quotes/quotes_english.json')
            .subscribe(res => resolve(res.json()));
        })
    }

    getAllEnglishSongs() {
        return new Promise(resolve => {
            this.http.get('../assets/songs/songs_english.json')
            .subscribe(res => resolve(res.json()));
        })
    }

    getAllTeluguSongs() {
        return new Promise(resolve => {
            this.http.get('../assets/songs/songs_telugu.json')
            .subscribe(res => resolve(res.json()));
        })
    }

    // getAllSongs() {
    //     return new Promise(resolve => {
    //         this.http.get(`${this.baseUrl}/songs.json`)
    //         .subscribe(res => resolve(res.json()));
    //     })
    // }

    // getAllPraises() {
    //     return new Promise(resolve => {
    //         this.http.get(`${this.baseUrl}/praises_en.json`)
    //         .subscribe(res => resolve(res.json()));
    //     })
    // }

    // getAllTeluguPraises() {
    //     return new Promise(resolve => {
    //         this.http.get(`${this.baseUrl}/praises_tel.json`)
    //         .subscribe(res => resolve(res.json()));
    //     })
    // }

    // getAllQuotes() {
    //     return new Promise(resolve => {
    //         this.http.get(`${this.baseUrl}/quotes.json`)
    //         .subscribe(res => resolve(res.json()));
    //     })
    // }
}