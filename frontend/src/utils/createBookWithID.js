import { v4 as uuidv4 } from "uuid";

const createBookWithID = (book, sourse) => {
  return {
    ...book,
    sourse,
    isFavorite: false,
    id: uuidv4(),
  };
};

export default createBookWithID;
