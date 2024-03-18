import units from "../../cypress/fixtures/units.json";
import type { Unit } from "@/entities/units.type";

const mapUnits: Units  = {}

interface Units {
    [key: string]: Unit;
}

units.forEach((unit) => {
  mapUnits[unit.name] = unit;
});

export default  mapUnits;


