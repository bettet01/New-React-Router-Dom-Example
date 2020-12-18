import axios from 'axios';

const addApiKey = "&apiKey=eaa19564e9f449cbb271aff8bd9335e9"

export const autoCompleteProduct = (queryParam: string) => async (dispatch: any) => {
  await axios.get(`https://api.spoonacular.com/food/products/suggest?query=${queryParam}&number=15${addApiKey}`).then((res) => {
    dispatch({
      type: "ALTER_SUGGESTIONS",
      payload: res.data.results
    })
  })
}