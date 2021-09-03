import React, { Component } from "react";
import { connect } from "react-redux";
import classNames from "classnames"

import PlaylistIcon from "../icons/playlist"
import ShuffleIcon from "../icons/shuffle"
import RepeatIcon from "../icons/repeat"
import RepeatOneIcon from "../icons/repeat_one"
import SkipLeftIcon from "../icons/skip_left"
import SkipRightIcon from "../icons/skip_right"
import PlayIcon from "../icons/play"
import PauseIcon from "../icons/pause"
import VolumeMinIcon from "../icons/volume_min"
import VolumeMaxIcon from "../icons/volume_max"
import VolumeDisabledIcon from "../icons/volume_disabled"

import FullscreenIcon from "../icons/fullscreen"

class Player extends Component {
	render() {
		return (
			<div className="app-player">
                {/* <div>
                    <PlaylistIcon/>
                    <ShuffleIcon/>
                    <RepeatIcon/>
                    <RepeatOneIcon/>
                    <SkipLeftIcon/>
                    <SkipRightIcon/>
                </div>
                
                <PlayIcon/>
                <PauseIcon/>
                <div>
                    <VolumeMinIcon/>
                    <VolumeMaxIcon/>
                    <VolumeDisabledIcon/>
                </div>

                <FullscreenIcon/> */}

                <div className="player-section-1">
                    <div className="section-left">
                        <div className="video-thumbnail"></div>
                        <div className="track-detail">
                            <div className="track-title">
                                Iteration 1
                            </div>
                            <div className="track-subtitle">
                                Octatrack, Digitakt, Digotne, Analog Heat
                            </div>
                        </div>
                    </div>
                    <div className="section-right">
                        <PlaylistIcon/>
                    </div>
                </div>
                <div className="player-section-2">

                    <div className="timeline-container">
                        <div className="timeline-bar-container">
                            <div className="timeline-bar"></div>
                        </div>

                        <div className="timeline-start-time">
                            0:00
                        </div>

                        <div className="timeline-end-time">
                            12:00
                        </div>
                    </div>
                </div>
                <div className="player-section-3">Section 2</div>
            </div>
		);
	}
}

function mapStateToProps(state) {
	return {
	};
}

export default connect(mapStateToProps, {})(Player);
