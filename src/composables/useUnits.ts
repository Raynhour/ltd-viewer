import { reactive } from "vue";
import Units from '../../cypress/fixtures/units.json'
import Upgrades from '../../cypress/fixtures/upgrades.json'
import type { Unit } from "@/entities/units.type";

const list = [...Units, ...Upgrades]

interface UnitMap { 
    [key: string]: Unit
}

const units = reactive<UnitMap>({})

export default function useUnits() {
    function unit(name: string): Unit {
        if (!units[name]) {
            const foundUnit =  list.find(unit => unit.name === name) as Unit
            if(foundUnit) units[name] = foundUnit
        
        }
    return units[name]
    }
    return  { unit }
}
