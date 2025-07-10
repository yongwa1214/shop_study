import axios from './httpRequester';

export const addItem = itemId =>{
  return axios.post('/cart',{itemId}).catch(e => e.response);
}

export const getItems = () =>{
  return axios.get('/cart').catch(e => e.response);
}

export const removeItem = (cartId) =>{
  return axios.delete(`/cart/${cartId}`).catch(e => e.response);

}

export const clearAll = () =>{
  return axios.delete('/cart').catch(e => e.response);
}