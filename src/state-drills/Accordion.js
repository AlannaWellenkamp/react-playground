import React from 'react';

class Accordion extends React.Component {
    static defaultProps = {
        sections: []
    };

    constructor(props) {
        super(props)
        this.state = {
            currentSection: null
        }
    }
    
    handleSectionClick = (sectionI) => {
        this.setState({ currentSection: sectionI })
    }

    renderLi(section, index, currentSection) {
        return (
            <li key={index}>
                <button type='button' onClick={() => this.handleSectionClick(index)}>
                    {section.title}
                </button>
                {(currentSection === index) && <p>{section.content}</p>}
            </li>
        )
    }

    render() {
        const sections = this.props.sections
        const currentSection = this.state.currentSection
        return (
            <ul>
                {sections.map((section, index) =>
                    this.renderLi(section, index, currentSection))}
            </ul>
        )
    }
}

export default Accordion;