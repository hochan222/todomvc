import { IRootStore } from '../types/models/index';

class UIStore {
  rootStore: IRootStore;

  constructor(rootStore: IRootStore) {
    this.rootStore = rootStore;
  }
}

export default UIStore;
