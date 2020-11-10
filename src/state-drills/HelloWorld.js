import React from 'react';

class HelloWorld extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            who: 'world'
        }
    }

    handleButtonClick = e => {
        console.log('button clicked - ' + e.target.value)
        this.setState({
            who: e.target.value
        })
    }


    render() {
        return (
            <div>
                <p>Hello, {this.state.who}!</p>
                <button onClick={this.handleButtonClick} value='world'>World</button>
                <button onClick={this.handleButtonClick} value='friend'>Friend</button>
                <button onClick={this.handleButtonClick} value='React'>React</button>
            </div>
        )
    }

}

export default HelloWorld;