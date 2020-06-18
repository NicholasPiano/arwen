
import { eventChannel, buffers } from 'redux-saga';

import { events } from '../constants';

const socketEventChannel = socket => eventChannel(
  emit => {
    /* eslint-disable no-param-reassign */
    socket.onopen = () => {
      emit({ type: events.OPEN });
    };

    socket.onmessage = ({ data }) => {
      emit({ type: events.MESSAGE, data });
    };

    socket.onclose = data => {
      emit({ type: events.CLOSE, data });
    };

    socket.onerror = data => {
      emit({ type: events.ERROR, data });
    };
    /* eslint-enable no-param-reassign */

    return () => {
      socket.close();
    };
  },
  buffers.expanding(10),
);

export default socketEventChannel;
