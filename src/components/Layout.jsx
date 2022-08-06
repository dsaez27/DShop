import React, { Component } from 'react';
import { Announcement } from './Announcement';
import { Footer } from './Footer';
import { Index as Navbar } from './Navbar/Index';
import { Wrapper } from './styles/Wrapper';

export default class Layout extends Component {
	render() {
		return (
			<>
				<Announcement />
				<Navbar />
				<Wrapper>{this.props.children}</Wrapper>
				<Footer />
			</>
		);
	}
}
