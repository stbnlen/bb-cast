import { Card, CardBack, CardFront, CardInner } from './CharacterItems.styled';

type Item = {
	img: string;
	name: string;
	portrayed: string;
	nickname: string;
	birthday: string;
	status: string;
};

type Props = {
	item: Item;
};

export const CharacterItems: React.FC<Props> = ({ item }) => {
	// console.log(item);
	return (
		<Card>
			<CardInner className=''>
				<CardFront>
					<img src={item.img} alt='' />
				</CardFront>
				<CardBack>
					<h1>{item.name}</h1>
					<ul>
						<li>
							<strong>Actor Name:</strong> {item.portrayed}
						</li>
						<li>
							<strong>Nickname:</strong> {item.nickname}
						</li>
						<li>
							<strong>Birthday:</strong> {item.birthday}
						</li>
						<li>
							<strong>Status:</strong> {item.status}
						</li>
					</ul>
				</CardBack>
			</CardInner>
		</Card>
	);
};
