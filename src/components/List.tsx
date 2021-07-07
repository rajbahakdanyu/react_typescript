interface IProps {
	people: { name: string; age: number; url: string; note?: string }[];
}

const List = ({ people }: IProps) => {
	return <div>Imma list</div>;
};

export default List;
