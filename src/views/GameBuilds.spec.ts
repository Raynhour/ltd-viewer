import { describe, it, expect, vi } from 'vitest'
import { nextTick } from 'vue'
import { VueWrapper, mount } from '@vue/test-utils'
import type { GlobalMountOptions } from '@vue/test-utils/dist/types'
import { VueQueryPlugin, QueryClient } from 'vue-query'
import Component from './GameBuilds.vue'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import GameFixture from '../../cypress/fixtures/game.json'
import { afterEach, mock } from 'node:test'
import WaveIcon from '@/components/WaveIcon.vue'
import auth from '@/api/initApi'
import injections from '@/consts/injections'

global.ResizeObserver = require('resize-observer-polyfill')

const vuetify = createVuetify({
  components
})

const push = vi.fn()

let mockWave = 1

vi.mock('vue-router', () => ({
  ...vi.importActual('vue-router'), // Import then override
  useRouter: vi.fn(() => ({
    replace: push
  })),
  useRoute: vi.fn(() => ({
    query: {
      wave: mockWave
    }
  }))
}))

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
function createWrapper(overrides?: GlobalMountOptions | undefined, props?: any) {
  const defaultMountingOptions = {
    global: {
      sync: false,
      plugins: [vuetify, [VueQueryPlugin, vueQueryPluginOptions]],
      stubs: {
        transition: false
      },
      provide: {
        [injections.API]: auth
      }
    }
  }

  const defaultProps = {
    data: GameFixture
  }
  wrapper = mount(Component, {
    props: { ...defaultProps, ...props },
    ...defaultMountingOptions,
    ...overrides
  })
}

const findWaveIcon = (number: number) =>
  wrapper.findAllComponents(WaveIcon).find((vm: VueWrapper<any>) => vm.props()?.wave === number)

describe('GameBuilds.vue', () => {
  afterEach(() => {
    mockWave = 1
  })

  it('should be wave 1 on init', () => {
    createWrapper()

    expect(wrapper.text()).toContain('Wave 1')
  })

  it('should be wave 2 if route changed', async () => {
    mockWave = 2
    createWrapper()

    expect(wrapper.text()).toContain('Wave 2')
  })

  it('on click should push to next wave', async () => {
    createWrapper()

    const waveNumber = 2

    const wave2 = findWaveIcon(waveNumber)

    wave2.trigger('click')

    await nextTick()

    expect(push).toHaveBeenCalledWith({ query: { wave: waveNumber } })
  })

  it.todo('should show game builds')
  it.todo('should show merceneraries')
  it.todo('should show leaks')
  it.todo('shoud show king HP')
})
