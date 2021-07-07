import { useState } from "react";
import { IState as Props } from "../App";

interface IProps {
	setPeople: React.Dispatch<React.SetStateAction<Props["people"]>>;
	people: Props["people"];
}

const AddToList: React.FC<IProps> = ({ setPeople, people }) => {
	const [input, setInput] = useState({
		name: "",
		age: "",
		note: "",
		img: "",
	});

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setInput({
			...input,
			[e.target.name]: e.target.value,
		});
	};

	const handleClick = () => {
		if (!input.name || !input.age) return;

		setPeople([
			...people,
			{
				name: input.name,
				age: parseInt(input.age),
				url: input.img,
				note: input.note,
			},
		]);

		setInput({
			name: "",
			age: "",
			img: "",
			note: "",
		});
	};

	return (
		<div className='AddToList'>
			<input
				type='text'
				name='name'
				placeholder='Name'
				className='AddToList-input'
				value={input.name}
				onChange={handleChange}
			/>
			<input
				type='text'
				name='age'
				placeholder='Age'
				className='AddToList-input'
				value={input.age}
				onChange={handleChange}
			/>
			<input
				type='text'
				name='img'
				placeholder='Image URL'
				className='AddToList-input'
				value={input.img}
				onChange={handleChange}
			/>
			<textarea
				name='note'
				placeholder='Note'
				className='AddToList-input'
				value={input.note}
				onChange={handleChange}
			/>
			<button onClick={handleClick} className='AddToList-btn'>
				Add to List
			</button>
		</div>
	);
};

export default AddToList;
