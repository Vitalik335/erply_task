import React from 'react';
import Cookies from "js-cookie";
import Select from 'react-select';
import _ from "lodash";
import {selectLanguageChange} from "../../store/actions/selectLanguage";
import {connect} from "react-redux";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import NewsItem from "./NewsItem";
import "./index.css";

const languages = [
    {
        value: "us",
        label: "USA"
    },
    {
        value: "ua",
        label: "Ukraine"
    },
    {
        value: "ru",
        label: "Russian"
    },
    {
        value: "ae",
        label: "United Arab Emirates"
    },
    {
        value: "ar",
        label: "Argentina"
    },
    {
        value: "at",
        label: "Austria"
    },
    {
        value: "au",
        label: "Australia"
    },
    {
        value: "be",
        label: "Belgium"
    },
    {
        value: "bg",
        label: "Bulgaria"
    }
];

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            apiKey: Cookies.get('apiKey'),
            selectedOption: null,
            result: []
        };
    }

    componentDidMount() {
        this.props.selectLanguageChange('ru', this.state.apiKey);
    }

    handleChange = selectedOption => {
        this.props.selectLanguageChange(selectedOption.value, this.state.apiKey);
    };

    render() {
        const {selectedOption} = this.state;
        const {articles} = this.props;
        return (
            <div>
                <Container>
                    {articles.articles.length !== null ? (
                        <Row className='py-3'>
                            <Col xs={12} sm={12}>
                                <p className='h5  text-center'>{articles.articles.length} News Result(s)</p>
                            </Col>
                            <Col xs={6} sm={6}>
                                <div>
                                    <span>News from country:    <Select className="size" defaultValue={{
                                        label: "Russian",
                                        value: 'ru', ...selectedOption
                                    }} options={languages} onChange={this.handleChange}/></span>

                                </div>
                            </Col>

                        </Row>
                    ) : null}
                    {articles.articles.length !== null && (
                        <Row className='justify-content-md-center mb-4'>
                            {articles.articles.map((item, i) => (
                                <NewsItem ind={i} item={item}/>
                            ))}
                        </Row>
                    )}

                    {articles.articles.length === 0 && (
                        <Row className='justify-content-md-center py-4'>
                            <Col xs={12} sm={8} className='text-center'>
                                <Spinner animation='border' size='lg'/>
                            </Col>
                        </Row>
                    )}

                </Container>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        articles: state.selectLanguageReducer
    };
}

function mapDispatchToProps(dispatch) {
    return {
        selectLanguageChange: (articles, apiKey) => dispatch(selectLanguageChange(articles, apiKey))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
