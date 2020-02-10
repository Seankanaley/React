import React from 'react';
import { Card, CardImg, CardText, CardBody, Breadcrumb, Button, BreadcrumbItem, Modal, ModalBody, ModalHeader, Label, Row, Col, } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';

const required = val => val && val.length;
const maxLength = len => val => !val || (val.length <= len);
const minLength = len => val => val && (val.length >= len);

class CommentForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false,
            touched: {
                author: false,
            }
        };
    }

    handleSubmit(values) {
        console.log("Current state is: " + JSON.stringify(values));
        alert("Current state is: " + JSON.stringify(values));
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    render() {
        return (
            <React.Fragment>
                <Button outline onClick={() => this.setState({ isModalOpen: true })} className="fa fa-pencil"> Submit Comment</Button>
                <Modal isOpen={this.state.isModalOpen} toggle={() => this.setState({ isModalOpen: false })}>
                    <ModalHeader toggle={() => this.setState({ isModalOpen: false })}> Submit Comment</ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={values => this.handleSubmit(values)}>
                            <Row className="form-group">
                                <Label htmlFor="rating" md={12}> Rating</Label>
                                <Col md={12}>
                                    <Control.select model="rating" id="label" className="form-control">
                                        <option> </option>
                                        <option >1</option>
                                        <option >2</option>
                                        <option >3</option>
                                        <option >4</option>
                                        <option >5</option>
                                    </Control.select>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="author" md={12}>Your Name</Label>
                                <Col md={12}>
                                    <Control.text model=".author" id=".author" name="author"
                                        className="form-control"
                                        placeholder="Your Name"
                                        validators={{
                                            required,
                                            minLength: minLength(2),
                                            maxLength: maxLength(15)
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".author"
                                        show="touched"
                                        component="div"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be at least 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                    />

                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="text" md={12}>Comment</Label>
                                <Col md={12}>
                                    <Control.textarea rows='6' model=".comment" id="text" name="text"
                                        className="form-control"
                                    >
                                    </Control.textarea>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col>
                                    <Button type="submit" color="primary">Submit
                                    </Button>
                                </Col>
                            </Row>
                        </LocalForm>
                    </ModalBody>
                </Modal>
            </React.Fragment>
        );
    }
}



function RenderCampsite({ campsite }) {

    return (
        <div className="col-md-5 andm-1">
            <Card >
                <CardImg top src={campsite.image} alt={campsite.name} />
                <CardBody>
                    <CardText>{campsite.description}</CardText>
                </CardBody>
            </Card>
        </div>
    );
}


function RenderComments({ comments }) {
    if (comments) {
        return (
            <div className=' col-md-5 and m-1'>
                <h4>Comments</h4>
                {
                    comments.map((comment) =>
                        <p key={comment.id}>
                            <div>{comment.text}</div>
                            <small>{comment.author} - {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))} </small>
                        </p>
                    )
                }
                <CommentForm />
            </div>
        );
    }
    return <div />

}


function CampsiteInfo(props) {
    if (props.campsite) {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Breadcrumb>
                            <BreadcrumbItem> <Link to="/directory">Directory</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{props.campsite.name}</BreadcrumbItem>
                        </Breadcrumb>
                        <h2>{props.campsite.name}</h2>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <RenderCampsite campsite={props.campsite} />
                    <RenderComments comments={props.comments} />
                </div>
            </div>
        );
    }
    return <div />;
}

export default CampsiteInfo;