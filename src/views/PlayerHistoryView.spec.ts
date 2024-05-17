import { describe, it, expect, vi, beforeEach } from 'vitest'
import { flushPromises, mount } from '@vue/test-utils'
import type { GlobalMountOptions } from '@vue/test-utils/dist/types'
import { VueQueryPlugin, QueryClient } from 'vue-query'
import Component from '@/views/PlayerHistoryView.vue'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import { nextTick } from 'vue'
import auth from '@/api/initApi'
import injections from '@/consts/injections'

import axios from 'axios'
import axiosMock from '@/__mocks__/axios.mock'
import GameCard from '@/components/game/card/GameCard.vue'

axiosMock(axios)

global.ResizeObserver = require('resize-observer-polyfill')

const push = vi.fn()

let mockName = 'raynhour'

vi.mock('vue-router', () => ({
  ...vi.importActual('vue-router'), // Import then override
  RouterView: {},
  useRouter: vi.fn(() => ({
    push: push
  })),
  useRoute: vi.fn(() => ({
    query: {
      name: mockName
    }
  }))
}))

const vuetify = createVuetify({
  components
})

const vueQueryPluginOptions = {
  queryClient: new QueryClient({
    defaultOptions: {
      queries: {
        retry: false
      }
    }
  })
}

let wrapper: any
function createWrapper(overrides?: GlobalMountOptions | undefined) {
  const defaultMountingOptions = {
    global: {
      sync: false,
      plugins: [vuetify, [VueQueryPlugin, vueQueryPluginOptions]],
      stubs: {
        transition: false,
        'router-view': true,
        'router-link': true
      },
      provide: {
        [injections.API]: auth
      }
    }
  }
  wrapper = mount(Component, { ...defaultMountingOptions, ...overrides })
}

const findPreloader = () => wrapper.findComponent({ name: 'v-progress-circular' })
const findError = () => wrapper.findComponent({ name: 'v-alert' })
const findGames = () => wrapper.findAllComponents(GameCard)

axiosMock(axios)

describe('PlayerHistoryView.vue', () => {
  beforeEach(() => {
    // create teleport target
    const el = document.createElement('div')
    el.id = 'header'
    document.body.appendChild(el)
  })
  it('showed preloader state on mounted', () => {
    createWrapper()

    const preloader = findPreloader()
    expect(preloader.exists()).toBe(true)
  })
  it('showed error state when failed', async () => {
    mockName = 'error'
    createWrapper()

    await flushPromises()
    await nextTick()

    const error = findError()
    expect(error.exists()).toBe(true)
  })
  it('showed games', async () => {
    mockName = 'raynhour'

    createWrapper()

    await flushPromises()

    const games = findGames()
    expect(games.length).toBe(2)
  })
})
