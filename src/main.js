import React from "react"
import { render } from "react-dom"
import domready from "domready"

import FormTest from "./FormTest"

domready(
    () => {

        render(
            <FormTest/>,
            document.getElementById("root"),
            () => console.log("done")
        )
    }
);
