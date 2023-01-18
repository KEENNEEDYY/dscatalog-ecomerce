import './styles.css';

type Props = {
    name: string;
}

const CategoryBadge = ({name} : Props) => {
    return(
        <div className="category-badge-container">
            <h6>{name}</h6>
        </div>
    )
};

export default CategoryBadge;