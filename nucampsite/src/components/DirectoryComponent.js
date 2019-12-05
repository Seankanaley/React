import React, { Component } from 'react';
import CampsiteInfo from './CampsiteInfoComponent';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

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
        this.state = {
            selectedCampsite: null
        };
    }

    onCampsiteSelect(campsite) {
        this.setState({ selectedCampsite: campsite });
    }

    // renderSelectedCampsite(campsite) {
    //     if (campsite) {
    //         return (
    //             <Card>
    //                 <CardImg top src={campsite.image} alt={campsite.name} />
    //                 <CardBody>
    //                     <CardTitle>{campsite.name}</CardTitle>
    //                     <CardText>{campsite.description}</CardText>
    //                 </CardBody>
    //             </Card>
    //         );
    //     }
    //     return <div />;
    // }


    render() {
        const directory = this.props.campsites.map(campsite => {
            return (
                //To render and array of elements most efficiently, add a unique key attribue to the topmost element in each array key="element.id"
                <div key={campsite.id} className="col-md-5 m-1">
                    <Card onClick={() => this.onCampsiteSelect(campsite)}>
                        <CardImg width="100%" src={campsite.image} alt={campsite.name} />
                        <CardImgOverlay>
                            <CardTitle>{campsite.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    {directory}
                </div>
                <CampsiteInfo campsite={this.state.selectedCampsite} comments={this.state.comments}></CampsiteInfo>
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