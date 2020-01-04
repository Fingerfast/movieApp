import React, {Fragment} from 'react';
import Category from "./Category";


const popularMoviesResource = "https://api.themoviedb.org/3/movie/popular?api_key=2d2b4585cf1acf76d22f4e95451fd75e";
const popularTvResource = "https://api.themoviedb.org/3/tv/popular?api_key=2d2b4585cf1acf76d22f4e95451fd75e&language=en-US&page=1";
const familyResource = "https://api.themoviedb.org/3/discover/movie?api_key=2d2b4585cf1acf76d22f4e95451fd75e&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=10751";
const documentaryResource = "https://api.themoviedb.org/3/discover/movie?api_key=2d2b4585cf1acf76d22f4e95451fd75e&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=99";

export default function Dashboard() {
    return (
        <Fragment>
            <Category url={popularMoviesResource} title={'Popular movies'} />
            <Category url={popularTvResource} title={'Popular series'} />
            <Category url={familyResource} title={'Family'} />
            <Category url={documentaryResource} title={'Documentary'} />
        </Fragment>
    );
}