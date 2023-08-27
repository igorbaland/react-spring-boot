import React, { Component } from 'react';

class FooterComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div>
                <footer className = "footer">
                    <span className="text-secondary">All Rights Reserved 2020 @bal</span>
                </footer>
            </div>
        );
    }
}

export default FooterComponent;