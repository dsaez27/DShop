import React from 'react';
import ReactDom from 'react-dom';
import styled from 'styled-components';
import { mobile } from '../helpers/responsive';

export default function Modal({ isOpen, onClose, children, name }) {
	if (!isOpen) return null;

	return ReactDom.createPortal(
		<ModalWrapper>
			<ModalContainer>
				<ModalHeader>
					<ModalClose onClick={onClose}>x</ModalClose>
				</ModalHeader>
				<ModalBody>{children}</ModalBody>
			</ModalContainer>
		</ModalWrapper>,
		document.getElementById('portal')
	);
}

const ModalWrapper = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.5);
	display: flex;
	justify-content: center;
	align-items: center;
	transition: all 0.3s ease-in-out;
	overflow: hidden;
	z-index: 999;
`;

const ModalContainer = styled.div`
	width: min(768px, 100%);
	background-color: #f5f5f5;
	border-radius: 10px;
	padding: 10px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	z-index: 100;
	transition: all 100ms cubic-bezier(0.4, 0, 0.2, 1);
	transition-delay: 200ms;
	${mobile({
		maxWidth: '100%',
		padding: '10px',
		borderRadius: '0px',
		boxShadow: 'none',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
	})}
`;

const ModalHeader = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: flex-end;
	align-items: center;
	padding-right: 10px;
`;

const ModalClose = styled.span`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 30px;
	height: 30px;
	border-radius: 50%;
	background-color: #fff;
	font-weight: 500;
	font-size: 1rem;

	${mobile({
		width: '30px',
		height: '30px',
		borderRadius: '50%',
		boxShadow: 'none',
	})}
`;

const ModalBody = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;

	${mobile({
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
	})}
`;
