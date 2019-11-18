import React, { Component } from "react";   
import ReactTooltip from 'react-tooltip'
import "./style.css";

export class Links extends Component {
    state = { mode: "html" };

    availableModes = ["html", "icons", "json", "plaintext"];

    iconsMode() {
        return this.props.links.map(link => {
            return <a target='_blank' rel="noopener noreferrer" href={link.url}><img className='icon' alt='link.name' src={`/svg/${link.name}.svg`}/></a>
        })
    }

    jsonMode() {
        const json = JSON.stringify(this.props.links, null, 4);

        return <textarea className='json'value={json} />;
    }

    plaintextMode(){
        let text = ''

        this.props.links.map(link=>{
            return text+=`${link.name}: ${link.displayText?link.displayText:link.url}\n\n`
        })

        return <textarea value={text}/>
    }

    htmlMode() {
        return this.props.links.map(link => {
            let displayText = ''

            if (link.displayText) {
                displayText = link.displayText
            } else {
                displayText = link.url.replace(/^https:\/\//, "");                
                if (displayText.length >= 40) {
                    displayText = displayText.slice(0, 39) + "...";
                }
            }

            return (
                <div>
                    <span>{link.name}: </span>
                    <a target='_blank' rel="noopener noreferrer" href={link.url}>{displayText}</a>
                </div>
            );
        });
    }

    render() {
        return (
            <div className="Links">
                <div className="buttons">
                    {this.availableModes.map(mode => {
                        return (
                            <button onClick={() => this.setState({ mode })}>
                                {mode}
                            </button>
                        );
                    })}
                </div>
                {this[this.state.mode + "Mode"]()}
                <ReactTooltip />
            </div>
        );
    }
}

export default Links;
