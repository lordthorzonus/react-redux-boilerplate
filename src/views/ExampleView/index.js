import React, { Component } from 'react';
import DocumentMeta from 'react-document-meta';

const metaData = {
    title: 'Boilerplate AsyncView',
    description: '',
    canonical: 'http://example.com/path/to/page',
    meta: {
        charset: 'utf-8',
        name: {
            keywords: 'react,meta,document,html,tags'
        }
    }
};


class Example extends Component {

    render() {
        return (
            <div className="section">
                <DocumentMeta {...metaData} />
                <div className="container">
                    <div className="col-md-12">
                        <h1> Loaded async </h1>
                    </div>
                </div>
            </div>
        )
    }
}
export default Example;