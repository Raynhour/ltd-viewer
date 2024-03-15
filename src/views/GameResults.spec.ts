import { describe, it, expect } from 'vitest'
import {  mount } from '@vue/test-utils'
import type { GlobalMountOptions } from "@vue/test-utils/dist/types";
import Component from './GameResult.vue'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import GameTable from '@/components/game/GameTable.vue';
import GameFixture from '../../cypress/fixtures/game.json'

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
    data: GameFixture
  }
  wrapper = mount(Component, {
    props: { ...defaultProps, ...props },
    ...defaultMountingOptions,
    ...overrides,
  });
}

const findTable = () => wrapper.findComponent(GameTable)
const findTeam1Result = () => wrapper.findAll('.result').at(0)

describe('GameWrapper.vue', () => {
  it('show table on render', () => {
    createWrapper()

    const table = findTable()
    expect(table.exists()).toBe(true)
  })

  it('show that team 1 is win', () => {
    createWrapper()

    const result = findTeam1Result()
    expect(result.text()).toContain(GameFixture.playersData[0].gameResult)
  })

})
