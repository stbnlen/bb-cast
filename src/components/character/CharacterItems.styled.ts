import styled from 'styled-components';

export const Card = styled.div`
	cursor: pointer;
	background-color: transparent;
	height: 300px;
	perspective: 1000px;

	h1 {
		font-size: 25px;
		border-bottom: 1px #fff solid;
		padding-bottom: 10px;
		margin-bottom: 10px;
	}

	img {
		width: 100%;
		height: 300px;
		object-fit: cover;
	}

	li {
		list-style: none;
		padding-bottom: 10px;
	}
`;

export const CardInner = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
	transition: transform 0.8s;
	transform-style: preserve-3d;

	${Card}:hover &:hover {
		transform: rotateY(180deg);
	}
`;

export const CardFront = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	-webkit-backface-visibility: hidden;
	backface-visibility: hidden;
`;

export const CardBack = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	-webkit-backface-visibility: hidden;
	backface-visibility: hidden;

	background-color: #333;
	color: white;
	padding: 20px;
	transform: rotateY(180deg);
`;
