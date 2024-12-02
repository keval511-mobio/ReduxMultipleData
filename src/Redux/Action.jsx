 

export const add = (data) => {
  return { type: "add", payload: data };
};

export const edit = (id, updatedData) => {
  return { type: "edit", payload: { id, updatedData } };
};

export const remove = (id) => {
  return { type: "remove", payload: id };
};
