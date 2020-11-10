import React from 'react';

class RouletteGun extends React.Component {
    static defaultProps = {
        bulletInChamber: 8
    }

    constructor(props) {
        super(props)
        this.state = {
            chamber: null,
            spinningTheChamber: false
        }
    }

    componentWillUnmount() {
        clearTimeout(this.timeout)
    }


    handleClick = () => {
        console.log('button clicked')
        this.setState({
            spinningTheChamber: true
        })
        this.timeout = setTimeout(() => {
            this.setState({
                spinningTheChamber: false,
                chamber: Math.ceil(Math.random() * 8)
            })
        }, 2000)
    }

    status() {
        const { spinningTheChamber, chamber } = this.state
        const { bulletInChamber } = this.props
        console.log('chamber ' + bulletInChamber + ' loaded')
        console.log('chamber' + chamber + ' firing')
        if (spinningTheChamber) {
            return 'spinning the chamber and pulling the trigger! ...'
        }
        else if (chamber === bulletInChamber) {
            return 'BANG!!!!'
        }
        else {
            return "you're safe!"
        }
    }

    render() {
        return (
            <div>
                <p>{this.status()}</p>
                <button onClick={this.handleClick}>Pull the trigger!</button>
            </div>
        )
    }

}

export default RouletteGun;