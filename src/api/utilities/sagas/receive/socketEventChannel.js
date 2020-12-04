
import { eventChannel, buffers } from 'redux-saga';

import createEvents from './createEvents';

const socketEventChannel = api => eventChannel(
  emit => {
    const events = createEvents(api);

    /* eslint-disable no-param-reassign */
    api.socket.onopen = () => {
      emit({ type: events.OPEN });
    };

    api.socket.onmessage = response => {
      emit({ type: events.MESSAGE, ...response });
    };

    api.socket.onclose = data => {
      emit({ type: events.CLOSE, data });
    };

    api.socket.onerror = data => {
      emit({ type: events.ERROR, data });
    };
    /* eslint-enable no-param-reassign */

    return () => {
      api.socket.close();
    };
  },
  buffers.expanding(10),
);

export default socketEventChannel;
