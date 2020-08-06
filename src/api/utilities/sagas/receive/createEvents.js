
const createEvents = ({ id }) => ({
  OPEN: `open_${id}`,
  CLOSE: `close_${id}`,
  ERROR: `error_${id}`,
  MESSAGE: `message_${id}`,
});

export default createEvents;
