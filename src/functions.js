const numbers = "0123456789";
//const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOP";
const characters = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOP";

export const functions = {
  calculateAccountNumber() {
    let id = "";
    const bankID = "0010";
    for (let i = 0; i < 7; i++) {
      let selectedNumber = numbers.charAt(
        Math.floor(Math.random() * numbers.length)
      );
      id += selectedNumber;
    }
    const finalID = bankID + "-" + id;
    return finalID;
  },

  calculateMemberID() {
    let id = "";
    for (let i = 0; i < 6; i++) {
      let selectedNumber = numbers.charAt(
        Math.floor(Math.random() * numbers.length)
      );
      id += selectedNumber;
    }
    id = id + "-";
    for (let i = 0; i < numbers.length; i++) {
      let selectedCharacter = characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
      id += selectedCharacter;
    }
    return id;
  },
};
