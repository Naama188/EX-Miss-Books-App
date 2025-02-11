
const { useState, useEffect } = React

export function BookFilter({filterBy, onSetFilterBy}) {
	// console.log('filterBy:', filterBy);
	// console.log('onSetFilterBy:', onSetFilterBy);

    const [filterByToEdit, setfilterByToEdit] = useState({ ...filterBy })

	useEffect(() => {
		onSetFilterBy(filterByToEdit)
	}, [filterByToEdit])


	function handleChange({target}){
		const field = target.name
		const value = target.value === 'number' ?  +target.value : target.value

		setfilterByToEdit(prevFilter => ({...prevFilter, [field]: value}))

	}

	// const {title , price}= filterBy

	return(
		<section >
			<div >
				<h2 >Filter books:</h2>
				<div >
					<div >
						<label htmlFor="byTitle">Title:</label>
						<input type="text" id="byTitle" name="title" value={filterBy.title} onChange={handleChange} className="input" placeholder="Search by title..." />
					</div>

					<div >
						<label htmlFor="byAuthor">Price:</label>
						<input type="number" id="price" name="price" value={filterBy.price || ''} onChange={handleChange} className="input" placeholder="Search by price" />
					</div>
				</div>
			</div>
		</section>
)

}


3