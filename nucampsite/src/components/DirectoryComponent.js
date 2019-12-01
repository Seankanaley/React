import React, { Component } from 'react';

//basic Structure
// class Directory extends Component {
//     constructor(props){
//         super(props);
//         this.state = {};
//     }

//     render(){
//         return(

//         );
//     }
// }

class Directory extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }


    render() {
        const directory = this.props.campsites.map(campsite => {
            return (
                //To render and array of elements most efficiently, add a unique key attribue to the topmost element in each array key="element.id"
                <div key={campsite.id} className="col">
                    <img src={campsite.image} alt={campsite.name} />
                    <h2>{campsite.name}</h2>
                    <p>{campsite.description}</p>
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    {directory}
                </div>
            </div>
        );
    }
}

//Example for component usage State/Props

// class ExampleParentComponent extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             number: 333
//         }
//     }
//     render(){
//         return <ExampleChildComponent number={this.state.number} />
//     };
// }

// class ExampleChildComponent extends Component {
//     render(){
//         return <div>{this.props.number}</div>
//     };
// }

export default Directory;