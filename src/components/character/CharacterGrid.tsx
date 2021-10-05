import { Spinner } from '../ui/Spinner';
import { CharacterItems } from './CharacterItems';
import { Card } from './CharacterGrid.styled';

type Items = {
	char_id: number;
	item: any;
	img: string;
	name: string;
	portrayed: string;
	nickname: string;
	birthday: string;
	status: string;
};

type Props = {
	isLoading: boolean;
	items: Items[];
};

export const CharacterGrid: React.FC<Props> = ({ isLoading, items }) => {
	return isLoading ? (
		<Spinner />
	) : (
		<Card>
			{items.map((item) => (
				<CharacterItems key={item.char_id} item={item} />
			))}
		</Card>
	);
};
