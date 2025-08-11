import { Form } from "react-router-dom"
import Wrapper from "../assets/wrappers/SearchForm"
import { useNavigation } from "react-router-dom"
import { FaSearch } from "react-icons/fa"
import { CgSearchLoading } from "react-icons/cg";

const SearchForm = ({ searchQuery }) => {
    const navigation = useNavigation();
    const isSubmitting = navigation.state === 'submitting';

    return (
        <Wrapper>
            <Form className='form'>
                <input name="search" className='form-input' placeholder='Search Cocktails...' defaultValue={searchQuery} autoComplete="off">
                </input>
                <button type="submit" className='btn' disabled={isSubmitting}>{isSubmitting ? <CgSearchLoading className="search-icon" style={{fontSize: '2rem'}}/> : <FaSearch className="search-icon" />}</button>
            </Form>
        </Wrapper>
    )
}

export default SearchForm