/* eslint-disable */
import { Store } from "vuex";

import { getModule } from "vuex-module-decorators";

// import Something from "~/store/Something";

// let someStore: Something

function initializeStores(store: Store<any>): void {
  // someStore = getModule(Something, store)
}

export { initializeStores /*, someStore */ };
