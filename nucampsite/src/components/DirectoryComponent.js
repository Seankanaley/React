import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

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

function RenderDirectoryItem({ campsite }) {
    return (
        <Card>
            <CardImg width="100%" src={campsite.image} alt={campsite.name} />
            <CardImgOverlay>
                <CardTitle>{campsite.name}</CardTitle>
            </CardImgOverlay>
        </Card>
    );
}

function Directory(props) {

    const directory = props.campsites.map(campsite => {
        return (
            //To render and array of elements most efficiently, add a unique key attribue to the topmost element in each array key="element.id"
            <div key={campsite.id} className="col-md-5 m-1">
                <RenderDirectoryItem campsite={campsite} />
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

// class Directory extends Component {

//     render() {
//         const directory = this.props.campsites.map(campsite => {
//             return (
//                 //To render and array of elements most efficiently, add a unique key attribue to the topmost element in each array key="element.id"
//                 <div key={campsite.id} className="col-md-5 m-1">

//                 </div>
//             );
//         });

//         return (
//             <div className="container">
//                 <div className="row">
//                     {directory}
//                 </div>
//             </div>
//         );
//     }
// }

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