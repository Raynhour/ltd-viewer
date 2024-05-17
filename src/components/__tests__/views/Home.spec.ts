import { describe, it, expect, vi } from 'vitest'

import { mount } from '@vue/test-utils'
import type { GlobalMountOptions } from '@vue/test-utils/dist/types'
import { useRouter } from 'vue-router'

import Component from '@/views/HomeView.vue'

import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import { nextTick } from 'vue'
import routerNames from '@/router/routerNames'

const push = vi.fn()

vi.mock('vue-router', () => ({
  ...vi.importActual('vue-router'), // Import then override
  useRouter: vi.fn(() => ({
    push: push
  }))
}))

const vuetify = createVuetify({
  components
})

let wrapper: any
function createWrapper(overrides?: GlobalMountOptions | undefined) {
  const defaultMountingOptions = {
    global: {
      sync: false,
      plugins: [vuetify],
      stubs: {
        transition: false
      }
    }
  }
  wrapper = mount(Component, { ...defaultMountingOptions, ...overrides })
}

const findSearchField = () => wrapper.find(`input[name="search"]`)

describe('HomeView.vue', () => {
  it('renders properly', () => {
    createWrapper()
    expect(wrapper.text()).toContain('Viewer')
  })

  it('redirect to game when search button is clicked', async () => {
    const triggerValue = '889ca22cf4c53e2a9ba855dcb2528439f8bd6f379aeeb85e0b88c48d18f5d78e'

    createWrapper()

    await findSearchField().setValue(triggerValue)

    expect(useRouter().push).toHaveBeenCalledWith({
      name: routerNames.GAME_RESULT,
      params: { id: triggerValue }
    })
  })

  it('redirect to player when search button is clicked', async () => {
    const triggerValue = 'ray'

    createWrapper()

    await findSearchField().setValue(triggerValue)

    expect(useRouter().push).toHaveBeenCalledWith({
      name: routerNames.PLAYER_HISTORY,
      query: { name: triggerValue }
    })
  })
})
