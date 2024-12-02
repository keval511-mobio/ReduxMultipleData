  
const initialState = [
  {
    id: 1,
    name: 'Keval',
    role: 'Admin',
    gender: 'Male',
  },
  {
    id: 2,
    name: 'Allie',
    role: 'User',
    gender: 'Female',
  },
  {
    id: 3,
    name: 'JackKeva',
    role: 'User',
    gender: 'Male',
  },
];

export default function Reducer(state = initialState, action) {
  switch (action.type) {
    case "add":
      return [...state, { ...action.payload, id: state.length + 1 }];
      
    case "edit":
      return state.map((task) =>
        task.id === action.payload.id
          ? { ...task, ...action.payload.updatedData }
          : task
      );
                 
    case "remove":
      return state.filter((task) => task. id !== action.payload);

    default:
      return state;
  }
}
