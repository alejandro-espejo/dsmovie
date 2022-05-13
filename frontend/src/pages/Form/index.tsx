import FormCard from 'components/FormCard';
import { useParams } from 'react-router-dom';

function Form() {

    // Obtem o código do parametro na URL
    const params = useParams();

    return (
        <FormCard movieId={`${params.movieId}`}/>
    );
}

export default Form;