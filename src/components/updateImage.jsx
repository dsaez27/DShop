import React from 'react';

export const updateImage = () => {
	const [image, setImage] = useState('');

	const handleChange = e => {
		setImage(e.target.files[0]);
	};

    use

	return (
		<>
			<form onSubmit={handleSubmit}>
				<input type='file' onChange={handleChange} />
			</form>
		</>
	);
};

