import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemListContainer from '../components/ItemListContainer';

const CategoriesPage = () => {
  const {
    id: provider
  } = useParams();
  const [providers, setProviders] = useState([]);

  useEffect(() => {
    if (provider) {
      setProviders([provider]);
    }
  }, [provider]);

  return (
    <ItemListContainer title={`${provider} courses`} categories={providers}/>
  );
};

export default CategoriesPage;