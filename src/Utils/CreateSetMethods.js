export const addToken = async (token, setDetails, sliderValues) => {
  if(setDetails.findIndex(i => i.name === token.name) === -1) {
    setDetails.push(token);

    sliderValues.push(0)
    return { setDetails, sliderValues };
  }
}