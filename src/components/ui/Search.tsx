import React, { useState } from 'react';

type Props = {
	getQuery: any;
};

export const Search: React.FC<Props> = ({ getQuery }) => {
	const [text, setText] = useState('');

	const onChange = (q: any) => {
		setText(q);
		getQuery(q);
	};

	return (
		<section className='search'>
			<form>
				<input
					type='text'
					className='form-control'
					placeholder='Search characters'
					value={text}
					onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
						onChange(e.target.value)
					}
					autoFocus
				/>
			</form>
		</section>
	);
};
