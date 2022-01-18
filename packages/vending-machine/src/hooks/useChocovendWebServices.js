import axios from 'axios';

const http = axios.create({
  baseURL: `${process.env.REACT_APP_CHOCOVEND_API_URL}/api`,
});

const getProducts = async () => {
  try {
    const { data } = await http.get('/products');

    return data;
  } catch (error) {
    /**
     * For now we just gonna return an empty array,
     * but in real scenario this needs to be logged.
     */
    throw error;
  }
};

const updateProduct = async (id, product) => {
  try {
    const { data } = await http.post(`/product/${id}`, product);

    return data;
  } catch (error) {
    /**
     * For now we just gonna return an empty array,
     * but in real scenario this needs to be logged.
     */
    throw error;
  }
};

/**
 * Hook for making request to Chocovend API.
 *
 * @todo Use React reducer if we have to manage more complex state.
 */
const useChocovendWebServices = () => ({
  getProducts,
  updateProduct,
});

export default useChocovendWebServices;
