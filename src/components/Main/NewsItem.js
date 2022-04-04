import React from 'react';
import Truncate from 'react-truncate';
import Moment from 'react-moment';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import NewsDefaultImage from './news-default-image.jpg';
import {FaRegBookmark, FaBookmark} from 'react-icons/fa';

class NewsItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <Col xs={12} sm={6} md={6} lg={4} xl={4} className='my-2'>
                <Card>
                    {this.props.item.urlToImage !== null ? (
                        <div
                            className='urlImage'
                            style={{
                                backgroundImage: `url(${this.props.item.urlToImage})`,
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: 'cover',
                                height: '250px'
                            }}
                        />
                    ) : (
                        <div
                            className='urlImage'
                            style={{
                                backgroundImage: `url(${NewsDefaultImage})`,
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: 'cover',
                                height: '250px'
                            }}
                        />
                    )}
                    <Card.Body>
                        <Card.Title>
                            <Truncate lines={2} ellipsis={<span>...</span>}>
                                {this.props.item.title}
                            </Truncate>
                        </Card.Title>
                        <Card.Subtitle className='mb-2 text-muted'>
                            {this.props.item.source.name} <br/>
                            <span style={{fontWeight: 'normal'}}>{this.props.item.author}</span>
                        </Card.Subtitle>
                        <Card.Text>
                            <Truncate lines={3} ellipsis={<span>...</span>}>
                                {this.props.item.description}
                            </Truncate>
                        </Card.Text>
                        {/*<Button bg="primary" onClick={DetailsPage}>*/}
                        {/*    Go to Page*/}
                        {/*</Button>*/}
                        {
                            <FaRegBookmark
                                className='float-right mt-2 icon-button'
                                size='1.5em'
                            />
                        }
                    </Card.Body>
                    <Card.Footer>
                        <small className='text-muted'>
                            Published: <Moment format='YYYY/MM/DD' date={this.props.item.publishedAt}/>
                        </small>
                    </Card.Footer>
                </Card>
            </Col>
        );
    }
}

export default NewsItem;