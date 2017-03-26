const initialState = { items: [] };

export default function templates(state = initialState, action) {
  const {payload} = action;

  switch (action.type) {
    default:
      return state;
  }
}
