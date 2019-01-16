import React, { Component } from 'react';

export class Details extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="details-block">
				<div
					style={{
						minHeight: '120px',
						whiteSpace: 'pre-line',
						fontFamily: 'Lato, sans-serif',
						paddingTop: '20px',
					}}
				>
					{this.props.textChoice === 'details'
						? `Headphones type - Over-Ear\
                        
                        Headphones use - Home Audio\
                        
                        Colour - Black\
                        
                        Built-in microphone - True\
                        
                        Manufacturer's warranty - 1 Year`
						: 'Springing from Audio-Technica’s rich heritage in professional audio, the ATH-MSR7 Over-Ear High-Resolution Audio (*See definition below) Headphones are designed to reproduce Hi-Res Audio, allowing users to hear music the way it was intended. The headphones are outfitted with exclusive 45 mm True Motion Drivers, which utilize lightweight voice coils, a custom-mounted printed circuit board and specially designed diaphragm to improve transient response and minimize sound distortion for rich, detailed audio reproduction.'}
				</div>
			</div>
		);
	}
}
