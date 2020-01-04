import React from 'react'
import {Switch, Route} from 'react-router-dom'
import TitleDetail from "./TitleDetail";

export default function Title({match}) {
    const { url } = match;
    return (
        <Switch>
            <Route path={`${url}/:id`} exact component={TitleDetail} />
            <Route path="*">
                <div>Not Found</div>
            </Route>
        </Switch>
    );
}