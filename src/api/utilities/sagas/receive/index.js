
import { put, call, take } from 'redux-saga/effects';

import createEvents from './createEvents';
import socketEventChannel from './socketEventChannel';

function* receive(api) {
  const events = createEvents(api);
  const channel = yield call(socketEventChannel, api);

  while (true) {
    const { type, data, ...rest } = yield take(channel);

    switch (type) {
      case events.OPEN: {
        yield put(api.open());

        break;
      }

      case events.MESSAGE: {
        const message = api.createMessage({ data, ...rest });

        if (!message.shouldIgnore) {
          yield put(api.receive(message));
        }

        break;
      }

      case events.CLOSE: {
        yield put(api.close(data));

        break;
      }

      case events.ERROR: {
        yield put(api.error(data));

        break;
      }

      default:
        break;
    }

    if (type === events.CLOSE) {
      break;
    }
  }
}

export default receive;
