import { describe, it, expect } from 'vitest'
import {  mount } from '@vue/test-utils'
import type { GlobalMountOptions } from "@vue/test-utils/dist/types";
import Component from './GameBoard.vue'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import GameTable from '@/components/game/GameTable.vue';

global.ResizeObserver = require('resize-observer-polyfill')

const vuetify = createVuetify({
  components
})

let wrapper: any;
function createWrapper(overrides?: GlobalMountOptions | undefined, props?: any) {
  const defaultMountingOptions = {
      global: {
        sync: false,
        plugins: [vuetify],
        stubs: {
          transition: false,
        },
      }
  };

  const defaultProps = {
    data: {}
  }
  wrapper = mount(Component, {
    props: { ...defaultProps, ...props },
    ...defaultMountingOptions,
    ...overrides,
  });
}

describe('GameWrapper.vue', () => {

  it.todo('should render units')



})
