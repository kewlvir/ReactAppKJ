import React, {Component} from "react";

export default class About extends Component {

    constructor() {
        super();
        //BAD
        this.members = ["member 1", "member 2", "member 5" ];
        //this.addMember = this.addMember.bind(this);
    }
        addMember()
        {
            //BAD:
            this.members.push("Member " 
                                    + Math.random());
            this.forceUpdate();
            //this.render();
        }

    

    render() {
        
            let list = this.members
            .map ( (member, index) => <li key={index}>{member}</li>)

            return (
            <div>
                <h2>About</h2>
                <button onClick={() => this.addMember()}>Add
                    </button>
                <ul>
                    {list}
                </ul>
            </div>
        )
    }
}