import React, { Component } from "react";
import ReactTooltip from "react-tooltip";
import "./style.css";
import svg from "../Svg";

export class Links extends Component {
    state = { mode: "html" };

    availableModes = ["html", "icons", "json", "plaintext"];

    
    iconsMode() {
        return (
            <div className={"iconLinks"}>
                {this.props.links.map(link => {
                    return (
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href={link.url}
                            title={link.name}
                        >
                            {svg[link.name]}
                        </a>
                    );
                })}
            </div>
        );
    }

    jsonMode() {
        const json = JSON.stringify(this.props.links, null, 4);

        return <textarea className="json" value={json} />;
    }

    plaintextMode() {
        let text = "";

        this.props.links.map(link => {
            return (text += `${link.name}: ${
                link.displayText ? link.displayText : link.url
            }\n\n`);
        });

        return <textarea value={text} />;
    }

    htmlMode() {
        return (
            <div className="regalurLinks">
                {this.props.links.map(link => {
                    let displayText = "";

                    if (link.displayText) {
                        displayText = link.displayText;
                    } else {
                        displayText = link.url.replace(/^https:\/\//, "");
                        if (displayText.length >= 40) {
                            displayText = displayText.slice(0, 38) + "...";
                        }
                    }

                    return (
                        <div>
                            <span>{link.name}: </span>
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href={link.url}
                            >
                                {displayText}
                            </a>
                        </div>
                    );
                })}
            </div>
        );
    }

    componentWillMount() {
        document.addEventListener("mousedown", this.handleClick, false);
    }
    componentWillUnmount() {
        document.removeEventListener("mousedown", this.handleClick, false);
    }
    handleClick = e => {
        if (this.node.contains(e.target)) {
            return;
        }

        this.setState({ mode: "html" });
    };

    render() {
        return (
            <div className="Links" ref={node => (this.node = node)}>
                <h2 className="text-center">Links</h2>
                <div className="buttons">
                    {this.availableModes.map(mode => {
                        return (
                            <button
                                onClick={() => this.setState({ mode })}
                                className={
                                    (this.state.mode === mode
                                        ? "active"
                                        : null) + " btn btn-info"
                                }
                            >
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