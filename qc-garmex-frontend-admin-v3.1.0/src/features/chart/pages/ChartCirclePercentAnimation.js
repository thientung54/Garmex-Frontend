import React, { Component } from "react";
import "../style.scss";
import { gsap } from 'gsap';
import { Waypoint } from 'react-waypoint';

class ChartCirclePercentAnimation extends Component {

    constructor(props) {
        super(props);
        this.state = { count: 0 };
        this.point = this.props.point;
        this.circle = "";
    }

    tl = gsap.timeline({paused: true});

    animateCounter = () => {
        this.tl.to(this, 1, {
            _count: this.point,
            onUpdate: () => this.setState({ count: ~~this._count })
        });
        this.tl.play();
        this.circle = "circle";
    };

    animateUpdateCounter = () => {
        this.setState({ count: 0 })
        this.circle = "";
        this.tl.restart();
    };

    render() {
        return (
            <div className="counter">
                <Waypoint
                    onEnter={this.animateCounter.bind()}
                    onPositionChange={this.animateUpdateCounter.bind()}
                    bottomOffset={this.props.bottomOffset}
                    scrollableAncestor={window}
                />
                <svg viewBox="0 0 36 36" className="circular-chart blue">
                    <path className="circle-bg"
                        d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <path className={this.circle + " circle-l"}
                        strokeDasharray={this.point + ", 100"}
                        d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <text x="18" y="20.35" className="percentage">{this.state.count}%</text>
                </svg>
            </div>
        );
    }
}

export default ChartCirclePercentAnimation;