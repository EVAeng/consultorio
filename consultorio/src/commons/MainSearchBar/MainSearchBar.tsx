import React, { useState } from 'react'

import SearchIcon from '@material-ui/icons/Search';

import "commons/MainSearchBar/MainSearchBar.css"
import { Grid } from "@material-ui/core";


export default function MainSearchBar() {
    const [value, setValue] = useState("")

    let input = React.createRef<HTMLInputElement>();

    const handleSearchBarOnChange = (e:any) => {
        setValue(e.target.value)
        console.log(value)
    }

    return (
        <div className="main__search__bar">

            <Grid container direction="row" justify="space-between" alignItems="center">
                <Grid item xs={1}>
                    <div className="search__icon">
                        <SearchIcon id="search_button"/>
                    </div>
                </Grid>
                <Grid item xs={10}>
                    <div className="search__bar">
                        <input id="search_bar" ref={input}type="text" placeholder="Search in Eva" onChange={(e) => {handleSearchBarOnChange(e)}}/>
                    </div>

                </Grid>
            </Grid>
        </div>
    )
}