import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import type { GlobalMountOptions } from '@vue/test-utils/dist/types'
import Component from './GameKing.vue'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import GameKingUpgrade from './GameKingUpgrade.vue'

global.ResizeObserver = require('resize-observer-polyfill')

const vuetify = createVuetify({
  components
})

enum KingUpgrades {
  attack = 'Upgrade King Attack',
  spell = 'Upgrade King Spell',
  regen = 'Upgrade King Regen'
}

enum FormattedKingUpgrade {
  attack = 'attack',
  spell = 'spell',
  regen = 'regen'
}

let wrapper: any
function createWrapper(overrides?: GlobalMountOptions | undefined, props?: any) {
  const defaultMountingOptions = {
    global: {
      sync: false,
      plugins: [vuetify],
      stubs: {
        transition: false
      }
    }
  }

  const defaultProps = {
    kingHP: 0,
    king: 'earthKing',
    kingUpgrades: [KingUpgrades.attack, KingUpgrades.spell, KingUpgrades.regen]
  }
  wrapper = mount(Component, {
    props: { ...defaultProps, ...props },
    ...defaultMountingOptions,
    ...overrides
  })
}

const findKingUpgrades = () => wrapper.findAllComponents(GameKingUpgrade)

describe('GameKing.vue', () => {
  it('should render correct quanity of king upgrades', () => {
    createWrapper()

    const kingUpgrades = findKingUpgrades()

    expect(kingUpgrades.length).toBe(3)
  })

  it('should render correctly formatted king upgades', () => {
    createWrapper()

    const kingUpgrades = findKingUpgrades()

    expect(kingUpgrades[0].props().upgrade).toBe(FormattedKingUpgrade.attack)
    expect(kingUpgrades[1].props().upgrade).toBe(FormattedKingUpgrade.regen)
    expect(kingUpgrades[2].props().upgrade).toBe(FormattedKingUpgrade.spell)
  })

  it('should be sorted king upgrades', () => {
    const props = {
      kingUpgrades: [
        KingUpgrades.spell,
        KingUpgrades.attack,
        KingUpgrades.regen,
        KingUpgrades.attack,
        KingUpgrades.spell
      ]
    }
    createWrapper({}, props)

    const kingUpgrades = findKingUpgrades()

    expect(kingUpgrades[0].props().upgrade).toBe(FormattedKingUpgrade.attack)
    expect(kingUpgrades[1].props().upgrade).toBe(FormattedKingUpgrade.attack)
    expect(kingUpgrades[2].props().upgrade).toBe(FormattedKingUpgrade.regen)
    expect(kingUpgrades[3].props().upgrade).toBe(FormattedKingUpgrade.spell)
    expect(kingUpgrades[4].props().upgrade).toBe(FormattedKingUpgrade.spell)
  })

  describe.each([
    [1, 100],
    [0.4, 40],
    [0.3, 30]
  ])('should render correct king HP', (kingHP, expectedModelValue) => {
    it(`should render correct king HP when kingHP is ${kingHP}`, () => {
      const props = {
        kingHP
      }
      createWrapper({}, props)

      const kingHPComponent = wrapper.findComponent({ name: 'VProgressLinear' })

      expect(kingHPComponent.props().modelValue).toBe(expectedModelValue)
    })
  })
})
