import axios from 'axios';
import { useEffect, useState } from 'react';
import { CharacterGrid } from './components/character/CharacterGrid';
import { Header } from './components/ui/Header';
import './App.css';
import { Search } from './components/ui/Search';
import { Container } from './Container.styled';

function App() {
	const [items, setItems] = useState<[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [query, setQuery] = useState<string>('');

	useEffect(() => {
		const fetchItems = async () => {
			const result = await axios(
				`https://www.breakingbadapi.com/api/characters?name=${query}`
			);
			setItems(result.data);
			setIsLoading(false);
		};
		fetchItems();
	}, [query]);
	return (
		<Container>
			<Header />
			<Search getQuery={(q: any) => setQuery(q)} />
			<CharacterGrid isLoading={isLoading} items={items} />
		</Container>
	);
}

export default App;
