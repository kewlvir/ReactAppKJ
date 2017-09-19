import React ,{Component} from "react";

export default class Home extends Component
{

    render()
    {
        let title= "Home";
        let subtitle= "sub";
        return (
                <div>
                <h1>Page-{title} - {subtitle}</h1>
                <p>welcome to product app</p>
                {/*comment here*/}
                </div>
               )

    }
}