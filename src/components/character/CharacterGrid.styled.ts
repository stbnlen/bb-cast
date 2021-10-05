import styled from 'styled-components';

export const Card = styled.section`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	gap: 1rem;

	@media (max-width: 800px) {
		grid-template-columns: repeat(2, 1fr);
	}
`;
