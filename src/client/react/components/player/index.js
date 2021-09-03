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
                <div>
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

                <FullscreenIcon/>
            </div>
		);
	}
}

function mapStateToProps(state) {
	return {
	};
}

export default connect(mapStateToProps, {})(Player);