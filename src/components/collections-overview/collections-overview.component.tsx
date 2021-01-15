import { useSelector } from 'react-redux';
import { selectCollections } from '../../redux/shop/shop.selectors';
import CollectionPreview from '../collection-preview/collection-preview.component';
import './collections-overview.styles.scss';

const CollectionsOverview = () => {
    //const collections = useSelector(selectCollectionsForPreview);
    const collections = useSelector(selectCollections);
    const previewCollections = Object.keys(collections).map(key => collections[key])
    return (
        <div className='collections-overview'>
            {previewCollections.map(({ id, ...otherCollectionProps }: any) => (
                    <CollectionPreview key={id} {...otherCollectionProps}/>
            ))}
        </div>
    )
}

export default CollectionsOverview;