const logic = ({ total, next, operation }) => {
  let result;
  if (operation === null) {
    result = total;
  } else if (operation === '+/-') {
    if (next === null || next === '0') {
      result = total;
    } else {
      result = next;
    }
  } else if (operation === '%') {
    result = operation ? total : `${total}%`;
  } else if (operation !== '%') {
    result = next ? total + operation + next : total + operation;
  } else {
    result = next === null ? operation : next;
  }
  return result;
};

export default logic;
