// export default (state = {}, action) => {
//   switch (action.type) {
//     case "USER_INPUT_DATA":
//       return action.data;
//     default:
//       return state;
//   }
// };

export default (state = [], action) => {
  switch (action.type) {
    case "USER_INPUT_DATA":
      return [...state, action.data];
    default:
      return state;
  }
};
