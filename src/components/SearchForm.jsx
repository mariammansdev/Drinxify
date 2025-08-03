import { Form } from "react-router-dom"
import Wrapper from "../assets/wrappers/SearchForm"
import { useNavigation } from "react-router-dom"

const SearchForm = ({ searchQuery }) => {
    const navigation = useNavigation();
    const isSubmitting = navigation.state === 'submitting';

    return (
        <Wrapper>
            <Form className='form'>
                <input type="search" name="search" className='form-input' placeholder='Search Cocktails...' defaultValue={searchQuery}>
                </input>
                <button type="submit" className='btn' disabled={isSubmitting}>{isSubmitting ? 'Searching' : 'Search'}</button>
            </Form>
        </Wrapper>
    )
}

export default SearchForm