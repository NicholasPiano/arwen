import { Manager } from '../../../../model';

class WebsocketManager extends Manager {

  useSubscription(parameters) {
    const { Subscription } = this.model.api;

    return Subscription.objects.useSubscription(parameters);
  }

}

export default WebsocketManager;
