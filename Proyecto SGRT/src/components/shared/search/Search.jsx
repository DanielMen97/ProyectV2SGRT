import './search.css'

export const Search = () => {

    return (

        <div className="Search-container">
            <input className='input-search' placeholder="Buscar" />
            <button>Buscar</button>
            <select name="pets" id="pet-select">
                <option className='select-item' value="">--Please choose an option--</option>
                <option className='select-item' value="dog">Dog</option>
                <option className='select-item' value="cat">Cat</option>
                <option className='select-item' value="hamster">Hamster</option>
                <option className='select-item' value="parrot">Parrot</option>
                <option className='select-item' value="spider">Spider</option>
                <option className='select-item' value="goldfish">Goldfish</option>
            </select>
        </div>

    )
}